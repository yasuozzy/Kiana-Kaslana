# 足球商店 API 接口文档

## 基础URL
```
http://localhost:8080
```

## 购物车相关接口

### 1. 添加商品到购物车
**接口**: `POST /api/cart/add`

**请求参数**:
```json
{
  "productId": 1,           // 商品ID（必填）
  "quantity": 1,            // 数量（可选，默认1）
  "selectedSize": "M"       // 尺码（可选）
}
```

**注意**: 
- `userId` 不需要传，后端会自动使用默认用户ID=1
- 字段名可以使用 `size` 或 `selectedSize`，后端会自动兼容

**成功响应**:
```json
{
  "success": true,
  "message": "商品已添加到购物车",
  "data": {
    "userId": 1,
    "items": [
      {
        "id": 1759595590733,        // 这是购物车项ID，删除时需要用到！
        "productId": 1,
        "productName": "切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26",
        "productImage": "...",
        "price": 122,
        "quantity": 1,
        "size": "M",
        "brand": "Nike",
        "subtotal": 122,
        "addedAt": "2025-10-04T16:00:00.000Z"
      }
    ],
    "totalAmount": 122,
    "totalItems": 1,
    "updatedAt": "2025-10-04T16:00:00.000Z"
  },
  "timestamp": 1759595590733
}
```

---

### 2. 删除购物车商品
**接口**: `DELETE /api/cart/remove/:itemId`

**URL示例**: 
```
DELETE http://localhost:8080/api/cart/remove/1759595590733
```

**重要说明**:
- ⚠️ **URL中的ID是购物车项的ID（`item.id`），不是商品ID（`productId`）！**
- 购物车项ID在添加商品时返回的 `data.items[].id` 字段中
- 不需要在请求体中传递任何参数

**成功响应**:
```json
{
  "success": true,
  "message": "商品已从购物车删除",
  "data": {
    "userId": 1,
    "items": [],
    "totalAmount": 0,
    "totalItems": 0,
    "updatedAt": "2025-10-04T16:00:00.000Z"
  },
  "timestamp": 1759595590733
}
```

**错误响应示例**:
```json
{
  "success": false,
  "message": "购物车中未找到该商品",
  "code": "ITEM_NOT_FOUND"
}
```

---

### 3. 获取购物车内容
**接口**: `GET /api/cart/:userId`

**URL示例**: 
```
GET http://localhost:8080/api/cart/1
```

**成功响应**:
```json
{
  "success": true,
  "data": {
    "userId": 1,
    "items": [
      {
        "id": 1759595590733,
        "productId": 1,
        "productName": "切尔西 Nike Dri-Fit Adv 客场比赛球衣 2025-26",
        "price": 122,
        "quantity": 1,
        "size": "M",
        "subtotal": 122
      }
    ],
    "totalAmount": 122,
    "totalItems": 1,
    "updatedAt": "2025-10-04T16:00:00.000Z"
  },
  "timestamp": 1759595590733
}
```

---

### 4. 更新购物车商品数量
**接口**: `PUT /api/cart/update`

**请求参数**:
```json
{
  "userId": 1,           // 可选，默认为1
  "itemId": 1759595590733,  // 购物车项ID（必填）
  "quantity": 2          // 新的数量（必填）
}
```

---

### 5. 清空购物车
**接口**: `DELETE /api/cart/clear/:userId`

**URL示例**: 
```
DELETE http://localhost:8080/api/cart/clear/1
```

---

## 前端调用示例

### JavaScript/Axios 示例

```javascript
// 1. 添加商品到购物车
async function addToCart(productId, size, quantity = 1) {
  const response = await axios.post('http://localhost:8080/api/cart/add', {
    productId: productId,
    selectedSize: size,
    quantity: quantity
  });
  return response.data;
}

// 2. 删除购物车商品
async function removeFromCart(itemId) {
  // 注意：这里的itemId是购物车项的ID，不是productId
  const response = await axios.delete(`http://localhost:8080/api/cart/remove/${itemId}`);
  return response.data;
}

// 3. 获取购物车
async function getCart() {
  const response = await axios.get('http://localhost:8080/api/cart/1');
  return response.data;
}

// 使用示例
async function example() {
  // 添加商品
  const addResult = await addToCart(1, 'M', 1);
  console.log('添加成功:', addResult);
  
  // 获取购物车项ID（重要！）
  const itemId = addResult.data.items[0].id;
  console.log('购物车项ID:', itemId);
  
  // 删除商品（使用购物车项ID，不是productId）
  const removeResult = await removeFromCart(itemId);
  console.log('删除成功:', removeResult);
}
```

---

## 常见错误

### 错误1: 删除时返回404
**原因**: 前端使用了错误的ID
- ❌ 错误：使用 `productId` (商品ID)
- ✅ 正确：使用 `item.id` (购物车项ID)

**解决方法**: 
从添加商品的响应中获取 `data.items[].id`，而不是使用 `productId`

### 错误2: 删除时返回 "购物车中未找到该商品"
**原因**: 使用了不存在的购物车项ID
**解决方法**: 
确保使用的是当前购物车中实际存在的商品的ID

---

## 测试接口

你可以使用以下curl命令测试接口：

```bash
# 1. 添加商品
curl -X POST http://localhost:8080/api/cart/add \
  -H "Content-Type: application/json" \
  -d '{"productId":1,"quantity":1,"selectedSize":"M"}'

# 2. 删除商品（替换1759595590733为实际的购物车项ID）
curl -X DELETE http://localhost:8080/api/cart/remove/1759595590733

# 3. 获取购物车
curl http://localhost:8080/api/cart/1
```

---

## 后端服务状态

服务器地址: `http://localhost:8080`
健康检查: `GET http://localhost:8080/api/health`


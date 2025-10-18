// 🔑 工具函数：获取当前登录用户的ID
import getUserId from './getUserId'
// 引入axios - 网络请求工具
import axios from 'axios'
// 购物车API的基础地址 - 就像商店的地址
const CART_BASE_URL = 'http://localhost:8080/api/cart'


// 🛒 购物车API封装 - 思路把购物车传到后端然后,后端再返回购物车商品列表显示商品在网页
export const getCartItems = () => {
  console.log('🔍 正在获取购物车商品列表...')
return axios.get(`${CART_BASE_URL}/${getUserId()}`, { //CART_BASE_URL是购物车API的基础地址 //getUserId()是获取当前登录用户的ID
  headers:{
    'Content-Type': 'application/json', // 告诉后端这是json格式的数据
      // 如果需要用户登录，带上token Authorization这是"身份验证柜台 Bearers是这是"会员卡类型+卡号
      //从浏览器本地存储里获取userToken 没用就用空字符串null
      'Authorization': `Bearer ${localStorage.getItem('userToken')||''} `
  }
})
.then(function(response){
  console.log('🎉 成功拿到购物车商品列表', response.data);
  return response.data // 返回购物车商品列表
})
.catch(function(error){
  console.log('❌ 获取购物车失败：', error)
  if(error.response) {
    console.log('🚨 错误状态码：', error.response.status)
    console.log('📝 错误详情：', error.response.data)

    if(error.response.status === 401) {
      console.log('💡 401错误：用户未登录，请先登录')
    } else if(error.response.status === 404) {
      console.log('💡 404错误：购物车为空或不存在')
    }
  } else if(error.request) {
    console.log('🌐 网络错误：无法连接到服务器')
  } else {
    console.log('❓ 未知错误：', error.message)
  }
  //
  throw error
})
}

// * 2. 添加商品到购物车 - 把商品放进购物车
export const addToCart = (productInfo) => { //productInfo是商品信息
  console.log('🛒 正在添加商品到购物车...', productInfo) //productInfo
  //(`${CART_BASE_URL}/add`这是要提交的地址 加上add就成了 http://localhost:8080/api/cart/add
  return axios.post(`${CART_BASE_URL}/add`,productInfo,{ //productInf要提交的内容
    headers:{
      'Content-Type': 'application/json',
      // 这行代码的意思是：如果用户登录了，就带上token，如果用户没有登录，就带上空字符串
      'Authorization':`Bearer ${localStorage.getItem('userToken')||''} `
    }
  })
  .then(function(response){
    console.log('✅ 成功添加到购物车！', response.data)
    return response.data
  })
  .catch(function(error){
    console.log('❌ 添加到购物车失败：', error)

    if(error.response) { // 第一层 服务器收到了请求，但明确拒绝了请求
      if(error.response.status === 400) { // 第二层 商品信息不完整或格式错误
        console.log('💡 400错误：商品信息不完整或格式错误')
        console.log('   检查：商品ID、数量、尺寸等是否正确')
      } else if(error.response.status === 401) {// 第三层 请先登录
        console.log('💡 401错误：请先登录')
      } else if(error.response.status === 404) {// 第四层 商品不存在
        console.log('💡 404错误：商品不存在')
      } else if(error.response.status === 409) {// 第五层 商品已在购物车中
        console.log('💡 409错误：商品已在购物车中')
      }
    }
    throw error // 重新抛出错误，让调用方也能处理
  })
}


//* 3. 更新购物车商品数量 - 改变商品数量 * PUT /api/cart/update/:id
export const updateCartQuantity = (cartItemId, newQuantity) => { //cartItemId是商品ID newQuantity是你想要改成几个
  console.log(`🔄 正在更新购物车商品数量... 购物车项ID: ${cartItemId}, 新数量: ${newQuantity}`)
   // ⭐ 关键：URL是 /update，不是 /update/${cartItemId}
  // 数据通过第二个参数（请求体）传递
  return axios.put(`${CART_BASE_URL}/update`,{
    userId: getUserId(),
    itemId: cartItemId,      // ⭐ 购物车项ID（不是productId）
    quantity: newQuantity // 这是我们要提交的修改内容 quantity是数量名就叫数量 newQuantity是用户添加的数量 就是想改成几个
  },{
    headers:{ //是告诉后端一些重要信息
      'Content-Type': 'application/json', // 告诉后端这是json格式的数据
      'Authorization':`Bearer ${localStorage.getItem('userToken')||''} ` //Authorization是身份证明 Bearer是持有人 浏览器本地存储里获取userToken 没用就用空字符串null
    }
  })
  .then(function(response){
    console.log('✅ 成功更新商品数量！', response.data)
    return response.data
  })
  .catch(function(error){
    console.log('❌ 更新商品数量失败：', error)
    if(error.response) {
      if(error.response.status === 400) {
        console.log('💡 400错误：商品信息不完整或格式错误')
        console.log('   检查：商品ID、数量、尺寸等是否正确')
      } else if(error.response.status === 401) {
        console.log('💡 401错误：请先登录')
      } else if(error.response.status === 404) {
        console.log('💡 404错误：商品不存在')
      }
    }
    throw error // 重新抛出错误，让调用方也能处理
  })
}

// * 4. 删除购物车中的商品 - 把商品从购物车拿出来
//  * DELETE /api/cart/remove/:id

export const removeFromCart = (cartItemId) => { //cartItemId是商品ID
  console.log(`🗑️ 正在从购物车删除商品... ID: ${cartItemId}`)
  // delete是删除已有的数据 加上remove/${cartItemId}就成了 http://localhost:8080/api/cart/remove/1 精确确地告诉服务器：“我要删除的是购物车里ID为123的那个商品
  return axios.delete(`${CART_BASE_URL}/remove/${cartItemId}`,{
    headers:{ // 是告诉后端一些重要信息
      'Content-Type': 'application/json', // 告诉后端这是json格式的数据
      'Authorization':`Bearer ${localStorage.getItem('userToken') || ''}` //Authorization是身份证明 Bearer是持有人 浏览器本地存储里获取userToken 没用就用空字符串null
    }
  })
  .then(function(response){
    console.log('✅ 成功删除商品！', response.data)
    return response.data // 返回删除后的数据
  })
  .catch(function(error){
    console.log('❌ 删除商品失败：', error)
    if(error.response && error.response.status === 404){//两个同事满足才执行 error.response服务器 服务器给了错误回复 error.response.status === 404 = 错误代码是404
      console.log('💡 404错误：购物车中找不到该商品')
    }
    throw error // 重新抛出错误，让调用方也能处理
  })
}

// * 5. 清空购物车 - 把购物车里的所有商品都拿出来
//* DELETE /api/cart/clear
export const clearCart = () => {
  console.log('🧹 正在清空购物车...')
  return axios.delete(`${CART_BASE_URL}/clear`,{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('userToken') || ''}`
    }
})
.then(function(response){
  console.log('✅ 成功清空购物车！', response.data)
  return response.data
})
.catch(function(error){
  console.log('❌ 清空购物车失败：', error)
throw error
})
}
    /**
 * 6. 获取购物车商品总数 - 看看购物车里总共有多少件商品
 * GET /api/cart/count
 */
    export const getCartCount = () => {
      console.log('🔢 正在获取购物车商品总数...')

      return axios.get(`${CART_BASE_URL}/count`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken') || ''}`
        }
      })
      .then(function(response) {
        console.log('✅ 成功获取购物车商品总数！', response.data)
        return response.data
      })
      .catch(function(error) {
        console.log('❌ 获取购物车商品总数失败：', error)
        throw error
      })
    }

    /**
     * 7. 计算购物车总价 - 算算购物车里所有商品要多少钱
     * GET /api/cart/total
     */
    export const getCartTotal = () => {
      console.log('💰 正在计算购物车总价...')

      return axios.get(`${CART_BASE_URL}/total`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('userToken') || ''}`
        }
      })
      .then(function(response) {
        console.log('✅ 成功计算购物车总价！', response.data)
        return response.data
      })
      .catch(function(error) {
        console.log('❌ 计算购物车总价失败：', error)
        throw error
      })
    }

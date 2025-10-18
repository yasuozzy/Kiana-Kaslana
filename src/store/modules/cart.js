//购物车状态管理栏 模块
// Vuex是Vue的状态管理库，用于集中管理应用的所有组件状态
const cartStoreModule ={
  namespaced: true, //命名空间，避免和其他模块冲突，就像给这个模块起个专属名字
   // state - 存储购物车的所有数据 就像购物车里实际装的东西
   state:{
    // 从本地存储恢复购物车数据，如果没有就用空数组
    cartItemsList: JSON.parse(localStorage.getItem('shoppingCartData')||'[]'), //购物车里的商品清单，记录着车里每一样商品的信息 记住用户都选了哪些商品
    isCartModalVisible: false // 购物车弹窗是否显示
   },

    // mutations - 修改购物车数据的方法 只有这些方法能改变购物车内容
   mutations:{
    ADD_ITEM_TO_CART(state,productInfo) { //ProductInfo 是一个商品信息对象，包含了要添加的商品的所有信息(id什么的)
      // 检查购物车里是否已经有这个商品（相同id、尺寸、颜色）findIndex数组方法，查找符合条件的元素位置
      const existingItemIndex = state.cartItemsList.findIndex(item =>
        item.id === productInfo.id && // 检查id是否相同
        item.selectedSize === productInfo.selectedSize && // 检查尺寸是否相同
        item.selectedColor === productInfo.selectedColor // 检查颜色是否相同
      )

      //判断是否有了这商品
      if(existingItemIndex !== -1) { //existingItemIndex的返回值如果不是-1，说明购物车里有了这个商品
        // state.cartItemsList这是我们购物车的商品，它是一个数组，existingItemIndex这是访问数组元素的索引，它的作用是找到购物车中已经存在的商品的位置
        state.cartItemsList[existingItemIndex].quantity += productInfo.quantity//quantity是商品的一个属性，代表它的数量  productInfo.quantity是用户选择的数量
      }else{
        // 购物车里没有这个商品，添加新商品
        state.cartItemsList.push({ //这是添加新商品的操作，它的作用是把新商品添加到购物车的商品的末尾push清单中
           id: productInfo.id, // 从productInfo对象中获取商品ID，用来识别是哪个商品
           cartItemId: productInfo.cartItemId || null,   // ⭐ 购物车项ID（从后端返回）
           name: productInfo.name, // 从productInfo对象中获取商品名称
           price: productInfo.price, // 从productInfo对象中获取商品价格
           image: productInfo.image, // 从productInfo对象中获取商品图片
           selectedSize: productInfo.selectedSize || '均码', // 从productInfo对象中获取商品尺寸，没有就用均码
           selectedColor: productInfo.selectedColor || '默认', // 从productInfo对象中获取商品颜色，没有就用默认
           quantity: productInfo.quantity || 1 // 添加数量属性
        })
      }
      // 把购物车数据保存到本地存储  购物车数据是一个数组，需要用JSON.stringify()方法把数组转换为字符串，才能保存到本地存储
      localStorage.setItem('shoppingCartData',JSON.stringify(state.cartItemsList)) //存到localStorage里，名字叫shoppingCartData。
    },
       // REMOVE_ITEM_FROM_CART - 从购物车移除商品
       // 就像把商品从购物车拿出来扔掉 productInfo用户在网页上点击了购物车列表中第二件商品旁边的“删除”按钮，那么第二件商品的位置编号（index）1 就会作为 itemIndex 传进来。
        REMOVE_ITEM_FROM_CART(state,itemIndex){
          state.cartItemsList.splice(itemIndex,1)//splice是添加或删除，itemIndex是用户点击要删除的商品索引
          // 把购物车数据保存到本地存储
          localStorage.setItem('shoppingCartData',JSON.stringify(state.cartItemsList)) //存到localStorage里，名字叫shoppingCartData。
        },
        // UPDATE_ITEM_QUANTITY - 更新商品数量 就像改变购物车里某个商品的数量
        //itemIndex,newQuantity: itemIndex是用户在购物车列表中点击了某个商品的数量输入框，输入了新的数量，那么这个新的数量就会作为 newQuantity 传进来。
        UPDATE_ITEM_QUANTITY(state,{itemIndex,newQuantity}){
          if(newQuantity <= 0){  // 如果数量小于等于0，就移除商品
             // 如果用户想把商品数量改成0、-1之类的数，那逻辑上就等于不想要这个商品了。
            state.cartItemsList.splice(itemIndex,1) // 从购物车列表中移除这个商品
          }else{
            state.cartItemsList[itemIndex].quantity = parseInt(newQuantity) // 这行是更新购物车列表中指定商品的数量[itemIndex]是商品在列表中的位置
            //quantity是商品的数量  newQuantity是用户输入的新数量
          }
          // 把购物车数据保存到本地存储
          localStorage.setItem('shoppingCartData',JSON.stringify(state.cartItemsList)) //存到localStorage里，名字叫shoppingCartData。
        },

        // UPDATE_ITEM_SIZE - 更新商品尺寸 就像换一个尺寸的同样商品
        //itemIndex是用户在购物车列表中点击了某个商品的尺寸选择框，选择了新的尺寸，那么这个新的尺寸就会作为 newSize 传进来。newSize：想要修改成的新的尺寸（比如 'XL'）。
         UPDATE_ITEM_SIZE(state,{itemIndex,newSize}){
          //[itemIndex]定位到购物车里的具体商品.selectedSize定位到具体的尺寸
          state.cartItemsList[itemIndex].selectedSize = newSize
          // 把购物车数据保存到本地存储
          localStorage.setItem('shoppingCartData',JSON.stringify(state.cartItemsList)) //存到localStorage里，名字叫shoppingCartData。
         },

        // CLEAR_CART - 清空购物车 就像把购物车里的所有东西都倒掉
         CLEAR_CART(state){
          state.cartItemsList = [] //清空购物车
          // 把购物车数据保存到本地存储
          localStorage.setItem('shoppingCartData',JSON.stringify(state.cartItemsList)) //存到localStorage里，名字叫shoppingCartData。
          },

        // TOGGLE_CART_MODAL - 控制弹窗显示/隐藏
        TOGGLE_CART_MODAL(state,isVisible){
          state.isCartModalVisible = isVisible // isVisible是一个布尔值（true 或 false），用来表示购物车弹窗是否显示
        },

          // 新增：直接设置整个购物车列表（从后端获取后用这个）
          SET_CART_ITEMS(state,cartItemsList){ //state是购物车状态，cartItemsList是购物车商品列表
            state.cartItemsList = cartItemsList //把购物车商品列表赋值给购物车状态
            // 把数据保存到浏览器存储
            localStorage.getItem('shoppingCartData',JSON.stringify(state.cartItemsList))
          }
   },
    // actions - 异步操作和复杂逻辑 不能直接修改 State  就像购物车的"高级功能"，可以做一些复杂的操作
    actions:{
      // addProductToCart是添加商品到购物车的方法 commit是提交mutations的方法 productInfo是你要添加的那件新商品本身
      addProductToCart({commit},productInfo){
        commit('ADD_ITEM_TO_CART',productInfo) //这里是调用mutations中的ADD_ITEM_TO_CART方法就是上面的，把商品信息添加到购物车
        commit('TOGGLE_CART_MODAL',true)  // 购物车弹窗显示一开始是可能是false
      },

       // removeProductFromCart - 移除商品
       removeProductFromCart({ commit },itemIndex){
        commit('REMOVE_ITEM_FROM_CART',itemIndex)//意思是去把购物车里编号是 itemIndex 的那件商品拿出来扔掉
       },

        // updateProductQuantity -  它描述了“修改购物车里某件商品的数量”这个工作。
        updateProductQuantity({commit},payload){
          commit('UPDATE_ITEM_QUANTITY',payload)//payload是上面写着两条信息：1. 要修改的是第几号商品 (itemIndex)。 2. 要把数量改成多少 (newQuantity)。
        },

         // updateProductSize - 更新商品尺寸
         updateProductSize({commit},payload){
          commit('UPDATE_ITEM_SIZE',payload)
         }
    },

     // getters - 计算属性，用来获取处理后的数据
     // 就像购物车的"智能显示器"，能自动计算一些有用信息
     getters:{ //这些屏幕盯着购物车里的东西，然后自动帮你算出一些有用的信息，并且实时显示出来。你问它，它就告诉你
      // cartItemsCount - 购物车商品总数量
      cartItemsCount:(state)=>{
        //total 笔记本上当前的总数比如是0 清点完后是他的数    item：当前正在清点处理的商品总数从左到右
        return state.cartItemsList.reduce((total,item)=>{
          return total + item.quantity//把当前商品的数量（item.quantity）加到笔记本的总数（total）上。
        },0)
      },

      // cartTotalPrice - 购物车总价格 reduce 是数组的 "累加器"作用是从左到右依次处理数组里的每个元素，最后算出一个总和。
      cartTotalPrice(state){
        return state.cartItemsList.reduce((total,item)=>{
          return total + (item.price * item.quantity) // 价格乘以数量
        },0).toFixed(2)
      },

      //isCartEmpty - 购物车是否为空
      isCartEmpty(state){
        return state.cartItemsList.length === 0 //如果购物车为空，返回 true；否则返回 false。
      }
     },
      // 新增：清空购物车
  clearCart({ commit }) {
    commit('CLEAR_CART')
  }
}

// 导出购物车模块，让其他文件可以使用
export default cartStoreModule


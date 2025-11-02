// 从 Vuex 里导入 "创建仓库的工具"。
// Vuex是Vue的状态管理库，用于集中管理应用的所有组件状态
import { createStore } from 'vuex'
import cartStoreModule from './modules/cart.js' // 导入购物车模块
import { loginUser } from '@/api/index.js' // 导入后端API

// 定义加载注册用户的函数
const loadRegisteredUsers = () => {
  // 1. 从浏览器的本地存储获取"registeredUsers"项
  const savedUsers = localStorage.getItem('registeredUsers') //获取名为 "registeredUsers" 的存储项
  return savedUsers ? JSON.parse(savedUsers) : [] //如果存在，则解析为JSON对象，否则返回空数组
}

/***** Vuex工作原理 - 第1步：创建全局状态仓库 *****/
//用这个工具创建一个 "全局仓库"也就是商店
//类比：这就像是创建一个银行，所有人都可以来这个银行存取钱
const store = createStore({
  /***** Vuex工作原理 - 第2步：定义状态（数据） *****/
  //存放数据的地方 - 相当于银行的金库，存放所有重要数据
  state() {
    return {
      // 用户信息 , 默认是 null表示未登录
      user: null, // 存储登录用户的详细信息
      //是否登录的标志
      isLogin: false, // true表示已登录，false表示未登录

      //   /***** 新增状态 - 注册用户存储 *****/
      // 存储已注册用户的数组，就像银行的客户名单 实际项目中通常由后端数据库管理，这里为了演示用数组存储
      register: loadRegisteredUsers(),

      // 新增 最近看过的商品
      recentViewed: JSON.parse(
        // ：JSON.parse是把字符串变成数组
        localStorage.getItem('recentlyViewed') || '[]',
      ), // 从浏览器本地拿数据 没有就是空数组
    }
  },

  // modules - 注册子模块
  modules: {
    cart: cartStoreModule, // 注册购物车模块，名字叫'cart'
  },

  /***** Vuex工作原理 - 第3步：定义修改数据的方法 *****/
  // 定义修改数据的方法 - 相当于银行柜员，只有他们才能直接接触金库
  // mutations必须是同步的，不能包含异步操作
  mutations: {
    //登录成功后调用这个方法
    LOGIN_SUCCESS(state, userData1) {
      // 将用户信息存入state
      state.user = userData1
      // 修改登录状态为true
      state.isLogin = true

      //同时保存到localStorage  'currentUser'必须娶个字符串的名字 userData1当前用户的信息
      // JSON.stringify(userData1)将用户对象转换为JSON字符串（localStorage只能存储字符串）
      localStorage.setItem('currentUser', JSON.stringify(userData1))
    },
    // 退出登录后调用这个方法
    LOGOUT(state) {
      state.user = null // 清空用户信息
      state.isLogin = false // 修改登录状态为 false
      // 清除localStorage中的当前用户 , removeItem方法用于删除指定名称的存储项
      localStorage.removeItem('currentUser')
    },

    //新增注册用户 mutations函数的第一个参数永远是当前的 state 对象
    REGISTER_USER(state, registerInfo) {
      //添加到Vuex状态 将新用户添加到已注册的数组中 就像银行把新客户信息添加到客户名单中
      state.register.push(registerInfo) //push方法用于将新用户添加到数组末尾 不然注册新的用户时 会覆盖掉之前的用户

      // 第2步：将整个用户数组保存到localStorage中
      // 'registeredUsers'是存储的键名，可以理解为"已注册用户"的标签
      // JSON.stringify(state.register)将整个用户数组转换为JSON字符串
      localStorage.setItem('registeredUsers', JSON.stringify(state.register)) //将数组转换为JSON字符串
    },

    // 初始化当前用户状态 防止刷新页面后用户信息丢失
    INIT_CURRENT_USER(state, user) {
      state.user = user // 将用户信息存入state
      state.isLogin = true // true表示已登录，false表示未登录
    },

    // 🆕 添加商品到最近预览的方法
    ADD_TO_RECENTLY_VIEWED(state, product) {
      // 第一步：检查这个商品是不是已经在列表里了
      const existingIndex = state.recentViewed.findIndex((item) => item.id === product.id)

      if (existingIndex !== -1) {
        // 如果找到了（不等于-1），就把它从原来位置删掉
        state.recentViewed.splice(existingIndex, 1) // // splice(位置, 删除几个) 就像从队伍里把某个人拉出来
      }
      // 第二步：把商品放到队伍最前面
      state.recentViewed.unshift(product) //nshift就像插队到最前面，push是排到最后面
      //第三步：如果队伍太长了，把最后面的人踢掉
      if (state.recentViewed.length > 10) {
        state.recentViewed.pop() //pop就像队伍里的最后一个人出来，shift是队伍里的第一个人出来
      }
      // 第四步：把新的队伍保存到浏览器的"小仓库"里
      localStorage.setItem(
        'recentlyViewed',
        JSON.stringify(state.recentViewed), // JSON.stringify把数组变成字符串，因为小仓库只能放字符串
      )
    },

    //空最近预览的方法(以后可能用到）
    CLEAR_RECENTLY(state) {
      state.recentViewed = [] // 清空最近预览的商品
      localStorage.removeItem('recentlyViewed')
    },
  },

  /***** Vuex工作原理 - 第4步：定义业务逻辑处理方法 *****/
  //Actions可以包含异步操作的方法,但最终还是要通过柜员（Mutations）来操作金库（State）
  //相当于银行的业务流程，可能包含多个步骤
  actions: {
    /***** 登录Action - 处理用户登录逻辑 *****/
    // 登录动作 - {commit}是解构获取上下文对象中的commit方法，loginData是组件传入的数据比如邮箱和密码
    async login({ commit, state }, loginData) {
      // 🔄 第一步：先尝试后端登录
      try {
        alert('🌐 尝试后端登录...')
        const response = await loginUser(loginData) //loginData用户输入的 发送 到后端 后端返回登录成不成功
        // ✅ 后端返回判断成功
        alert('✅ 后端返回登录成功', response)
        //response.data是后端返回的数据 身份令牌，后续请求的通行证和user是用户信息
        const { token, user } = response // ← loginUser 已经返回了 data

        // 保存 token（标记为真实登录）
        localStorage.setItem('userToken', token) //将登录令牌保存到浏览器，用于后续API请求的身份验证
        localStorage.setItem(
          'currentUser',
          JSON.stringify({
            ...user, //展开运算符
            loginMode: 'real', // ⭐ 标记：真实登录
          }),
        )
        commit('LOGIN_SUCCESS', user) //调用 Mutations 方法来修改 State user是用户信息
        return { success: true, mode: 'real' } //返回成功结果
      } catch (error) {
        // ❌ 后端返回登录失败
        alert('⚠️ 后端登录失败，降级到模拟模式')
        console.log('错误信息：', error.message)
        // 🎭 第二步：模拟登录（ 第二步：模拟登录（你原来的逻辑）原来的逻辑）
        // 调用 Mutations 方法来修改 State
        // 这里通常会发送请求到服务器验证
        // 现在我们模拟这个过程

        /***** 登录流程 - 创建Promise对象 *****/
        //Promise是什么？ 就像是一个"承诺"，承诺会返回一个结果需要时间,resolve是成功，reject是失败
        return new Promise((resolve, reject) => {
          /***** 登录流程 - 模拟网络请求 *****/
          // 模拟登录过程 - 实际项目中这里会发送HTTP请求到服务器
          setTimeout(() => {
            /***** 登录流程 - 验证用户名和密码 *****/
            // 这里应该是真实的验证逻辑 判断用户名密码是否匹配 - 现在是硬编码，实际应该由服务器验证
            // 需要通过{commit, state} 来获取 state 参数。find()方法用于查找数组中第一个满足条件的元素
            const registeredUser = state.register.find((user) => user.email === loginData.email) // 从“已注册用户名单”里找当前登录的用户
            if (registeredUser && registeredUser.password === loginData.password) {
              //注册时存的密码 和 登录时输入的密码是否一致 但find返回的空数组直接不执行这些
              /***** 登录流程 - 登录成功处理 *****/
              // 当验证成功时 创建一个用户数据对象
              const userData1 = {
                email: loginData.email,
                name: '管理员龙头琪亚娜卡斯兰娜',
              }

              /***** 登录流程 - 更新Vuex状态 *****/
              //调用 Mutations 方法来修改 State
              //commit方法就像是"提交表单"给柜员(mutations)处理
              commit('LOGIN_SUCCESS', userData1)

              /***** 登录流程 - 返回成功结果 *****/
              // 通过resolve(userData)告诉Promise的使用者"登录成功了"
              // 这个结果会传递给组件中的.then方法
              resolve(userData1)
            } else {
              /***** 登录流程 - 登录失败处理 *****/
              // 创建一个Error对象，包含错误信息
              reject(new Error('登录失败'))
              // 显示登录失败提示
              alert('登录失败')
            }
          }, 1000) // 模拟登录过程需要1秒
        })
      }
    },

    // 初始化store 恢复登录状态 防止刷新页面后用户信息丢失
    initStore({ commit }) {
      const currentUser = localStorage.getItem('currentUser') //查看本地存储里有没有currentUser
      if (currentUser) {
        commit('INIT_CURRENT_USER', JSON.parse(currentUser)) // 如果存在，则解析为JSON对象，并调用INIT_CURRENT_USER方法
      }
    },

    // /***** 新增Action - 注册用户 *****/
    // 注册动作 commit对讲机（用来联系仓库管理员state改数据) 当前的库存清单（state）
    //  userdata是组件传入的用户注册的数据
    register({ commit, state }, userdata) {
      /***** 注册流程 - 第1步：创建Promise对象 *****/
      //Promise是什么？ 就像是一个"承诺"，承诺会返回一个结果需要时间,resolve是成功，reject是失败
      return new Promise((resolve, reject) => {
        /***** 注册流程 - 第2步：模拟网络请求 *****/
        // 模拟注册过程 - 实际项目中这里会发送HTTP请求到服务器
        setTimeout(() => {
          /***** 注册流程 - 第3步：验证用户信息 检查用户是否已存在 ******/
          // 检查邮箱是否已被注册，防止同一邮箱多次注册
          // some()方法会遍历数组，如果找到匹配的返回true，否则返回false 一个匹配项就立即停止搜索（
          const isExist = state.register.some(
            // 👇 箭头函数：对每个已注册用户(user)做判断
            (user) => user.email === userdata.email, //比较邮箱是否相同
          )

          // /***** 注册流程 - 第4步：处理重复注册 *****/
          if (isExist) {
            // 如果邮箱已被注册（isExist为true）
            reject(new Error('邮箱已被注册'))
            alert('邮箱已被注册')
          } else {
            /***** 注册流程 - 第5步：处理新用户注册 *****/
            // 创建新用户对象
            const newUser = {
              email: userdata.email, //📮 从注册表单获取邮箱
              name: userdata.name, //👤 从注册表单获取用户名
              password: userdata.password, //🔒 从注册表单获取密码
              birthDate: userdata.birthDate, // 📅 从注册表单获取出生日期
              createdAt: new Date().toISOString(), // 🕒 注册时间
            }
            // 新增：调用mutation将新用户添加到状态中
            commit(
              //专门负责把数据送到Vuex仓库
              'REGISTER_USER', //告诉Vuex要执行哪个修改操作（必须和mutations里定义的名称完全一致）
              newUser,
            ) // 把新用户数据传递给mutation

            //  /***** 注册流程 - 第7步：返回安全的用户数据 *****/
            // 创建不包含敏感信息的用户数据对象
            // 不返回密码等敏感信息，保护用户隐私
            const safeUser = {
              email: newUser.email,
              createdAt: newUser.createdAt,
            }

            /***** 注册流程 - 第8步：返回成功结果 *****/
            // 通过resolve(safeUserData)告诉Promise的使用者"注册成功了"
            // 这个结果会传递给组件中的.then方法
            resolve(safeUser) // 📦 要返回的数据：安全版用户信息（只有邮箱、注册时间等公开信息）
          }
        }, 1000)
      })
    },

    /***** 注册Action - 处理用户注册逻辑 *****/
    /***** 退出登录Action *****/
    // 退出登录 - logout 应该放在这里，作为 actions 的一个方法
    logout({ commit }) {
      // 直接调用LOGOUT mutation清空用户状态
      commit('LOGOUT')
    },

    //添加到最近预览的动作
    addToRecentlyViewed({ commit }, product) {
      // commit就像给银行柜员下指令："请执行ADD_TO_RECENTLY_VIEWED操作"
      commit('ADD_TO_RECENTLY_VIEWED', product)
      // 为什么要用action？因为以后如果要发数据到服务器，可以在这里加
    },
  },
})

/***** Vuex工作原理 - 第5步：导出状态仓库 *****/
// 导出这个 "全局仓库" - 在main.js中会导入并挂载到Vue应用上
export default store

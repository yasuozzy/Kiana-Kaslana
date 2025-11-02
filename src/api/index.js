// 引入axios
import axios from 'axios'

// API请求函数
export const getProducts = () => {
  return axios
    .get('http://localhost:8080/api/products')
    .then(function (response) {
      // 成功了做什么
      console.log('🎉 成功拿到数据', response.data)
      return response.data // 返回数据供其他地方使用
    })
    .catch(function (error) {
      // 失败了做什么 - 更详细的错误处理
      console.log('❌ 请求失败：', error)

      if (error.response) {
        // 服务器有响应，但是状态码不是2xx
        console.log('🚨 错误状态码：', error.response.status)
        console.log('📝 错误信息：', error.response.data)

        if (error.response.status === 404) {
          console.log('💡 404错误：找不到这个API地址，可能是：')
          console.log('   1. 后端服务没启动')
          console.log('   2. API地址写错了')
          console.log('   3. 后端还没写好这个接口')
        }
      } else if (error.request) {
        // 请求发出了，但没收到响应
        console.log('🌐 网络错误：无法连接到服务器')
        console.log('   可能是后端服务没启动')
      } else {
        // 其他错误
        console.log('❓ 未知错误：', error.message)
      }

      throw error // 重新抛出错误，让调用方也能处理
    })
}
// 立即执行一次请求来测试
getProducts()

// 场景1：用户注册 POST请求
export const registerUser = (userData) => {
  // userdata是用户注册时的数据
  return axios
    .post('http://localhost:8080/api/auth/register', userData, {
      headers: {
        'Content-Type': 'application/json', // 就像快递包裹上贴的标签，告诉收件人这是什么类型的包裹
      },
    })

    .then(function (response) {
      // 成功了做什么 response服务器回信”，里面有注册成功的结果
      console.log('✅ 注册成功！', response.data)
      return response.data //把后端返回的数据传给调用者比如说组件
    })
    .catch(function (error) {
      //error 是 “失败信息包”，里面记录了为啥失败
      // ❌ 注册失败了
      console.log('❌ 注册失败：', error)
      if (error.response) {
        // 第一层 服务器收到了请求，但明确拒绝了请求
        console.log('🚨 错误状态码：', error.response.status) // 错误状态码
        console.log('📝 错误详情：', error.response.data)
        if (error.response.status === 400) {
          console.log('💡 400错误：请求参数错误，可能是：')
          console.log('💡 400错误：可能是：')
          console.log('   1. 用户名已经被占用了')
          console.log('   2. 密码太简单了')
          console.log('   3. 邮箱格式不对')
        }
      } else if (error.request) {
        console.log('🌐 网络错误：连不上服务器')
        console.log('   检查一下后端服务是否启动')
      } else {
        console.log('❓ 其他错误：', error.message)
      }
      throw error // 重新抛出错误，让调用方也能处理
    })
}

// 场景2：用户登录 POST请求 post请求是发送数据到服务器 后端返回登录成不成功
export const loginUser = (loginData) => {
  //loginData是用户登录时的数据比如说邮箱和密码
  return axios
    .post('http://localhost:8080/api/auth/login', loginData) //loginData是要传出去的东西
    .then(function (response) {
      // 成功了做什么 response服务器回信”，里面有登录成功的结果
      console.log('✅ 登录成功！', response.data) //data是登录成功的结果
      // 通常登录成功后，后端会返回token（令牌）token就像门卡，让你能访问需要登录的功能
      if (response.data.token) {
        console.log('🔒 登录成功，拿到了门卡（令牌）')
        // 把token保存进浏览器起来，下次请求时带上 不然每次打开页面都要重新登录，太麻烦了。
        localStorage.setItem('userToken', response.data.token)
        console.log('🔑 已保存登录令牌')
      }
      return response.data // 把服务器数据结果 返回给调用者比如说登录组件
    })
    .catch(function (error) {
      //error 是 “失败信息包”，里面记录了为啥失败
      if (error.response) {
        console.log('🚨 错误状态码：', error.response.status) //status是状态码
        console.log('📝 错误详情：', error.response.data) //data是错误详情
        if (error.response.status === 401) {
          // 401 没登录 或者 登录失败
          console.log('💡 401错误：账号或密码错误')
        } else if (error.response.status === 404) {
          // 404 找不到 地址错了，找不到地方
          console.log('💡 404错误：找不到用户')
        } else if (error.request) {
          console.log('🌐 网络错误：连不上服务器')
        } else {
          console.log('❓ 其他错误：', error.message)
        }
      }
      // 重新抛出错误，让调用方也能处理
      throw error
    })
}

// 场景3：商品搜索 GET请求
// 在 src/api/index.js 中添加
export const searchProducts = (keyword) => {
  return axios
    .get('http://localhost:8080/api/search', {
      params: {
        //params是请求参数
        keyword: keyword, // 这里是把用户搜索关键词转成 ?keyword=xxx 完整的地址是 http://localhost:8080/api/search?keyword=xxx
      },
    })
    .then((response) => {
      //response是服务器回信"，里面有搜索成功的结果
      console.log('🔍 搜索成功！', response.data)
      return response.data
    })
    .catch((error) => {
      console.log('❌ 搜索失败：', error)
      throw error
    })
}

// 场景4：获取搜索建议 GET请求
// 用于实时搜索建议功能，当用户输入时显示下拉建议列表
export const getSearchSuggestions = (keyword) => {
  return axios
    .get('http://localhost:8080/api/search/suggestions', {
      params: {
        keyword: keyword, // 把用户输入转成 ?keyword=xxx
      },
    })
    .then((response) => {
      console.log('💡 获取建议成功！', response.data)
      return response.data // 返回建议列表数据
    })
    .catch((error) => {
      console.log('❌ 获取建议失败：', error)
      throw error
    })
}

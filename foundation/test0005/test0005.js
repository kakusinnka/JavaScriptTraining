/* --------------------XMLHttpRequest基础使用- start --------------------- */
// 创建XHR对象
const xhr = new XMLHttpRequest();
// 表示该请求的最大请求时间（毫秒），若超出该时间，请求会自动终止
xhr.timeout = 5000;
// 初始化一个请求
xhr.open('GET', 'http://127.0.0.1:3000/');
// 发送请求
xhr.send();
// 请求成功完成时调用的函数
xhr.onload = function () {
    // 
    if (xhr.status == 200) {
        console.log(xhr.response)
    } else {
        console.log(`${xhr.status}:${xhr.statusText}`)
    }
}
// 事务由于错误而失败时调用的函数
xhr.onerror = function (error) {
    console.log(error)
}
/* --------------------XMLHttpRequest基础使用- end--------------------- */

/* --------------------封装请求类- start--------------------- */
// 结合Promise来构建一个XHR异步处理类，使异步请求操作的变得更简单。
// 封装请求类
class HD {
    // 响应类型
    options = {
      responseType: 'json',
    }

    // 
    constructor(method = 'GET', url, data = null, options) {
      this.method = method
      this.url = url
      this.data = this.formatData(data)
      // 将所有可枚举属性的值从一个或多个源对象分配到目标对象
      Object.assign(this.options, options)
    }

    // 返回表单数据
    formatData(data) {
      if (typeof data != 'object' || data == null) data = {}
      let form = new FormData()
      // 返回一个给定对象自身可枚举属性的键值对数组
      for (const [name, value] of Object.entries(data)) {
        form.append(name, value)
      }
  
      return form
    }

    static get(url, options) {
      return new this('GET', url, null, options).xhr()
    }

    static post(url, data, options) {
      return new this('POST', url, data, options).xhr()
    }

    // 返回一个Promise对象
    xhr() {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(this.method, this.url)
        xhr.responseType = this.options.responseType
        xhr.send(this.data)
        xhr.onload = function () {
          if (xhr.status != 200) {
            reject({ status: xhr.status, error: xhr.statusText })
          } else {
            resolve(xhr.response)
          }
        }
        xhr.onerror = function (error) {
          reject(error)
        }
      })
    }
  }
/* --------------------封装请求类- end--------------------- */

// fetch get 请求
fetch(`http://127.0.0.1:3000/`)
.then(response => {
    return response
})

// fetch post 请求
async function post() {
    const response = await fetch(`http://127.0.0.1:3000/dologin`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ name: '后盾人' }),
    })
    if (response.ok) {
        const articles = await response.json()
        console.log(articles)
    }
}
post()
const http = (method, url, options) => {
  const xhr = new XMLHttpRequest()
  xhr.open(method, url)
  xhr.onload = () => {
    options.callback(options.name, xhr.response, 'success')
  }
  xhr.onerror = () => {
    options.callback(options.name, xhr.response, 'fail')
  }
  xhr.send(options.data)
}
export default {
  get() {},
  post(url, options) {
    http('post', url, options)
  },
  put() {},
  delete() {},
  patch() {},
}

// 全局异常处理
export default (app) => {
    console.log('全局异常处理---------------')
  function callBack (ctx, next)  {
    console.log('全局异常处理')
    return next()
  }
  app.use(callBack)
}
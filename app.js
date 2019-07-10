const Koa = require("koa")
const app = new Koa()
const initRoutes = require("./router")

initRoutes(app)

app.listen(3000,()=>{
    console.log("教育项目服务器开启成功!")
})

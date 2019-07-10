const Router = require("koa-router")
const router = new Router({
    prefix: '/home'
})

router.get("/",async (cxt)=>{
    cxt.body = "hello world"
})



module.exports = router;

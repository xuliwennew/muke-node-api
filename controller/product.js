const Router = require("koa-router")
const router = new Router({
    prefix: '/product'
})

router.get("/",async (cxt)=>{
    cxt.body = "product hello"
})



module.exports = router;

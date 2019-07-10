const Router = require("koa-router")
const UserService = require("../services/UserService")
const router = new Router({
    prefix: '/user'
})

router.get("/",async (cxt)=>{
    cxt.body = await UserService.findUsers({})
})



module.exports = router;

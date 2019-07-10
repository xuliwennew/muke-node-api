const home = require("../controller/home")
const product = require("../controller/product")
const user = require("../controller/user")

let initRoutes = (app)=>{
    app.use(home.routes(),product.allowedMethods())
    app.use(product.routes(),product.allowedMethods())
    app.use(user.routes(),user.allowedMethods())
}



module.exports = initRoutes

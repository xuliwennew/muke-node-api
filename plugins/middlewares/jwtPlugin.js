const jwt = require("jsonwebtoken")
const util = require("util")
const verify = util.promisify(jwt.verify)
const tokenConfig = require("../../configs/config.token")


// const token = jwt.sign({name:"zs"}, tokenConfig.secret, {expiresIn: '1h'})  //token签名 有效期为1小时

async function  test(){
    console.log(await verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoienMiLCJpYXQiOjE1NjI2NTA2NjksImV4cCI6MTU2MjY1NDI2OX0.-AxzG8HrVbyDwcsnHwiR22hnm1qTsOBZNZSgoA-C6-A", tokenConfig.secret))
}

 test()

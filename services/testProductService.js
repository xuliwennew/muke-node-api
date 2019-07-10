

const UserService  = require("./UserService")

async function testUser() {
   let data = await UserService.findUsers({})
   console.log(data)
}



testUser()

const mongoose = require("./config/MongodbConfig")
const Schema = mongoose.Schema;
const userSchema = new Schema({})
const ProductModel = mongoose.model("users",{})

module.exports = {

    /**
     * 添加一个用户
     */
    async findUsers(where){
       return await ProductModel.find(where)
    }
}

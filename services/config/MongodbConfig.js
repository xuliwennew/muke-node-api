const mongoose = require("mongoose")
const config = require("../../configs/config.mongo")

mongoose.connect(`mongodb://${config.ip}:${config.port}/${config.db}`,{ useNewUrlParser: true })

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected!")
})


module.exports = mongoose

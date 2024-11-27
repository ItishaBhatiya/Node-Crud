const mongoose = require('mongoose')

const dbconnect = async()=>{
    await mongoose.connect("mongodb+srv://itishabhatiya7:Hello$#7@cluster0.ieazp.mongodb.net/")
    console.log("conneted to the db");
}
module.exports = dbconnect;

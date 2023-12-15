const mongoose = require("mongoose")
const postSchema = new mongoose.Schema({
  title:{ type: String, required: true },
  amount:{ type: Number, required: true },
  category:String,
  caption:String,
  date:{type:Date,default:Date.now},
  owner:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'user'
  }]
})
module.exports= mongoose.model("expencedata",postSchema);
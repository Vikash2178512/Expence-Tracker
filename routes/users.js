const mongoose = require("mongoose")
const plm = require("passport-local-mongoose")

mongoose.connect("mongodb://0.0.0.0/expense-Tracker")
.then(()=>console.log("connected!"))
.catch((err)=> Message.err);

const userSchema = new mongoose.Schema({
  username:{ type: String, required: true },
  email:{ type: String, required: true },
  password:String,
  secret:String,
  token:{
    type:Number,
    default:-1
  },
  posts:[{
    type:mongoose.Schema.Types.ObjectId,
    ref:'expencedata'
  }]
});
userSchema.plugin(plm);
module.exports = mongoose.model("user",userSchema);
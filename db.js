const mongoose= require('mongoose')
const url='mongodb+srv://Admin:root@keneth.wkkcmmh.mongodb.net/admin_db?retryWrites=true&w=majority'


mongoose.set('strictQuery',false)
module.exports=()=>{
  return  mongoose.connect(url);
}
//mongodb connect

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bloggingapp',
{
 useNewUrlParser:true,
 useUnifiedTopology:true
}).then(() =>{
 console.log("Connection Successfull");
}).catch((error) =>{
 console.log("Something wrong" , error);
})

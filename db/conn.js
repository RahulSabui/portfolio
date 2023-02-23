const mongoose = require('mongoose');

mongoose.connect(process.env.url,{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,
    // useFindAndModify:false
}).then(()=>{
    console.log("connection hoye gche bara");
}).catch((e)=>{
    console.log("connection hyni bara");
    console.log(e);
})
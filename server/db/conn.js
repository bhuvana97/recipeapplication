const mongoose = require("mongoose");

const url2=process.env.MONGO_URI;

mongoose.connect(url2,{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(()=>console.log("DATABASE connected")).catch((err)=> console.log("error" + err.message))
require("dotenv").config();
const express = require("express");
const app = express();
require("./db/conn");
const router = require("./routes/router");
const cors = require("cors");


// const port = 8005;

const bodyParser = require("body-parser");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.json());
app.use(cors())
app.use(router);

app.use("/uploads",express.static("./uploads"));


app.listen(port,()=>{
    console.log(`server start at port no ${process.env.PORT}`)
})
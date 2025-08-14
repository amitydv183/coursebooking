const express = require('express')
//console.log(express)
const app = express()
const port = 9000
const web = require('./routes/web')
const connectDB = require('./db/connectDB')
const fileUpload = require('express-fileupload')
const cookieParser = require('cookie-parser')
const cors = require("cors");

app.use(
    cors({
        origin:"http://localhost:5173",
        credentials:true,
    })
);
// token get cookie
app.use(cookieParser())

app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

connectDB()
app.use(express.json())




app.use('/api',web)
app.listen(port,console.log("server start localhost:9000"))
const mongoose = require('mongoose');
const LiveUrl ='mongodb+srv://amkr9329:amit123@cluster0.ma9dmog.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async ()=> {
   return mongoose.connect('mongodb://127.0.0.1:27017/courses')

   .then(()=>{
    console.log('MongoDB connected...');
   })
   .catch((error)=>{
    console.log(error);
   });
 
};

module.exports = connectDB;
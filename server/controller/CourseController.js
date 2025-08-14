const CourseModel = require('../models/course')
const cloudinary = require('cloudinary')


// Configuration
    cloudinary.config({ 
        cloud_name: 'dsn20ii2z', 
        api_key: '554698914281938', 
        api_secret: 'JTl3L3mRA7KOVu_sG9ZYapn9BRQ' // Click 'View API Keys' above to copy your API secret
    });
class CourseController{
static display = async(req,res)=>{
        try{
            const data = await CourseModel.find()
            //console.log("hi")
            res.json(data)
        }catch(error){
            console.log(error)
        }
    }
    static create  = async(req,res)=>{
        try{
            const {title,description,price,duration} = req.body
            const file =req.files.image 
          const imageUpload = await cloudinary.uploader.upload(file.tempFilePath,{
            floder:"courseImage"
          })
          
           const data = await CourseModel.create({
             title,
             description,
             price,
             duration,
             image:{
                public_id:imageUpload.public_id,
                url:imageUpload.secure_url
             }
          })
           res.json(data)
        }catch(error){
            console.log(error)

        }
    }
    static view = async(req,res)=>{
        try{
            const id = req.params.id
            const data = await CourseModel.findById(id)
            res.json(data)
        }catch(error){
            console.log(error)
        }
    }

    static update = async(req,res) =>{
        try{
            const id = req.params.id 
            const {title,description,price,duration} = req.body
            const data = await CourseModel.create({
            title,
            description,
            price,
            duration
          })
            res.json({
                msg:"update course success"
            })

        }catch(error){
            console.log(error)
        }
    }

    static delete =async(req,res) =>{
        try{
            const id = req.params.id 
            const data = await CourseModel.findByIdAndDelete(id)
            res.json({
                msg:"delete course success"
            })
        }catch (error){
            console.log(error)
        }
    }

}
module.exports = CourseController
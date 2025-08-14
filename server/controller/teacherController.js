const TeacherModel = require('../models/teacher')

class teacherController{
    static display = async(req,res)=>{
        try{
            res.send("hello display")
        }catch(error){
            console.log(error)
        }
    }
    static create  = async(req,res)=>{
        try{
          //  console.log(req.body)
          const {name,email,city} = req.body
          const data = await TeacherModel.create({
            name,
            email,
            city
          })
          res.json(data)
        }catch(error){
            console.log(error)
        }

    }
    static view = async(req,res)=>{
        try{
            const id = req.params.id
            const data = await TeacherModel.findById(id)
            res.status(200).json({
                data,
                message:"data is available"
            })
        }catch(error){
            console.log(error)
        }
    }
    static update = async(req,res)=>{
        try{
            const id = req.params.id
            const{name,email,city}=req.body
            const data = await TeacherModel.findByIdAndUpdate(id,{
                name,
                email,
                city
            });
            res.status(200).json({
                data,
                message:"updated Successfully"
            });
        }catch(error){
            console.log(error)
        }
    }
}

module.exports = teacherController;
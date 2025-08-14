const UserModel = require("../models/user")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

class userController{

    static register = async(req,res)=>{
        try{
            const {name,email,password} = req.body
             const existingUser =  await UserModel.findOne({email})
             if(existingUser){
                 return res.status(400).json({
                    msg:" use another mail"
                 });
             }
            const hashPassword = await bcrypt.hash(password,10)
            const data = await UserModel.create({
                name,
                email,
                password:hashPassword
            })
            res.json({
                data,
                msg:"user register success"
            })
        } catch (error){
            console.log(error)
        }
    }
    static login = async(req,res) =>{
        try{
            //console.log(req.body)
            const {email,password} = req.body;
            const user = await UserModel.findOne({email});
            if(!user){
                return res.status(400).json({message:"Invalid credentials"});
            }
            const isMatch = await bcrypt.compare(password,user.password);
            if(!isMatch){
                return res.status(400).json({message :"Wrong Password"});
            }
            // token create
            const token = jwt.sign({ ID: user._id},'pgjfthdk');
            //console.log(token)
            
            // send token to http

            res.cookie("token",token, {
                httpOnly: true,
            });
            res.status(200).json({
                message:"Login successful",
                role: user.role,
                name:user.name,
                email:user.email,
            });
        } catch(error){
            console.log(error)
        }
    }

    static profile =async(req,res)=>{
        try{
            console.log("hello profile")
        } catch(error){
            console.log(error)
        }
    }

    //logout

    static logout = async(req,res) =>{
        try{
            res.clearCookie("token")
            res.status(200).json({message:"logout successfully"})
        } catch(error){
            console.log(error)
        }
    }


}
module.exports = userController
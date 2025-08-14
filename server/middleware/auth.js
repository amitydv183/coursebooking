const jwt = require('jsonwebtoken');
const UserModel = require('../models/user');

const checkAuth=async(req,res,next)=>{
    const token = req.cookies.token;
    if(!token) return res.status(401).json({message:"unauthorized"});
    try{
        const decoded = jwt.verify(token,'pgjfthdk');
        
        const user = await UserModel.findById(decoded.ID);
        if(!user) return res.status(401).json({message:"User not found"});

        req.user=user;
        next();
    }
    catch(error){
        res.status(401).json({message:"invalid token"});
    }
}

module.exports = checkAuth
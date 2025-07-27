
import createError from "../utilis/error.js"
import jwt from "jsonwebtoken";
 export const verifytoken= (req,res,next)=>{
    const token = req.cookies.access_token;
    if(!token){
        return next(createError(401,"you are not authenticated!"))
    }
    jwt.verify(token,process.env.JWT,(err,users)=>{
        if(err) return next(createError(403,"Token is not valid!"));
        req.users= users;
        next()
    });
};
export const verifyuser =(req,res,next)=>{
    verifytoken(req,res,next,()=>{
        if(req.users.id === req.params.id || req.users.isAdmin){
            next();
        }else{
            return next(createError(403,"you are not authorized!"));
        }
    });

};

export const verifyadmin =(req,res,next)=>{
    verifytoken(req,res,next,()=>{
        if(req.users.isAdmin){
            next();
        }else{
            return next(createError(403,"you are not authorized!"));
        }
    });

};
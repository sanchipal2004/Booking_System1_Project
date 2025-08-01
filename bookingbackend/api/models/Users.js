import mongoose from 'mongoose';
const { Schema } = mongoose;

const UsersSchema= new mongoose.Schema({
    username:{
        type: String,
        required:true,
        unique: true, 
    },
    email:{
        type: String,
        required:true,
        unique:true,
    },
    password:{
        type: String,
        required:true 
    },
    isAdmin:{
        type: Boolean,
        default:true 
    },

});
export default mongoose.model("Users",UsersSchema)
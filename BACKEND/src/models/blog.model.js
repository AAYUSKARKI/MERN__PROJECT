import mongoose,{Schema} from 'mongoose'

const blogschema = new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true,
        ref:"User"
    },
    image:[{
        type:String,
        required:true
    }],
    category:{
        type:String,
        required:true
    },
    isPublished:{
        type:Boolean,
        default:false
    } 
},{
    timestamps:true
})

export const Blog = mongoose.model("Blog",blogschema)
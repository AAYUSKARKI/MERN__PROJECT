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
        type:Schema.Types.ObjectId,
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
    view:{
        type:Number,
        default:0
    },
    likes:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:false
    } 
},{
    timestamps:true
})

 const Blog = mongoose.model("Blog",blogschema)

 export default Blog
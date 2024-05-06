import  Blog  from "../models/blog.model.js";
import { asynchandler } from "../utils/asynchandler.js";
import { Apierror } from "../utils/apierror.js";
import { User } from "../models/user.model.js";
import { io } from "../index.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import { Apiresponse } from "../utils/apiresponse.js";

const createblog = asynchandler(async (req, res) => {
    const { title, description, category, isPublished } = req.body

    console.log(title, description,  category, isPublished)
    if(!title || !description  || !category || !isPublished){
        throw new Apierror(400, "All fields are required")
    }

    console.log(req.file.path)

    const imagelocalpath = req.file?.path

    if(!imagelocalpath){
        throw new Apierror(400, "Image is required")
    }

    const images = await uploadOnCloudinary(imagelocalpath)

    if(!images){
        throw new Apierror(400, "Image upload failed")
    }

    const authorId = req.user._id

    const author = await User.findById(authorId)

    if(!author){
        throw new Apierror(400, "Author not found")
    }

    const blog = await Blog.create({
        title,
        description,
        image: images.url,
        category,
        author:authorId,
        isPublished
    })

    const createdBlog = await Blog.findById(blog._id).populate("author")

    io.emit("blogcreated", createdBlog)

    if(!createdBlog){
        throw new Apierror(400, "Blog not created")
    }

    return res.status(201).json(new Apiresponse(201,createdBlog ,"Blog created successfully"))
})

const getallblogs = asynchandler(async (req, res) => {

    const blogs = await Blog.find().populate("author")

    if(!blogs){
        throw new Apierror(400, "No blogs found")
    }
    return res.status(200).json(new Apiresponse(200, blogs, "All blogs found"))
})

const getsingleblog = asynchandler(async (req, res) => {

    const blog = await Blog.findById(req.params.id).populate("author")

    if(!blog){
        throw new Apierror(400, "Blog not found")
    }

    return res.status(200).json(new Apiresponse(200, blog, "Blog found"))
})

const updateblog = asynchandler(async (req, res) => {

    const { title, description, category, isPublished } = req.body

    //console.log(title, description,  category, isPublished)

    //if(!title || !description  || !category || !isPublished){
    //     throw new Apierror(400, "All fields are required")
    // }

    

    const blog = await Blog.findByIdAndUpdate(req.params.id, {
        title,
        description,
        category,
        isPublished,
    }, {
        new: true
    })

    if(!blog){
        throw new Apierror(400, "Blog not found")
    }

    return res.status(200).json(new Apiresponse(200, blog, "Blog updated successfully"))

})

const deleteblog = asynchandler(async (req, res) => {

    const blog = await Blog.findByIdAndDelete(req.params.id)

    if(!blog){
        throw new Apierror(400, "Blog not found")
    }

    return res.status(200).json(new Apiresponse(200, blog, "Blog deleted successfully"))
})
export { createblog, getallblogs , getsingleblog , updateblog , deleteblog}
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import useGetsingleblog from '../Hooks/useGetsingleblog'

function Updateblog() {
    // const { title, description, image, category, isPublished } = req.body

    const { id } = useParams()

    const {blogdata} = useGetsingleblog(id)

    const [blog, setBlog] = useState({
        title: '',
        description: "",
        category: "",
        isPublished: false
    })

    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(null)

    useEffect(() => {
        if(blogdata){
            setBlog({
                title: blogdata.title || "",
                description: blogdata.description || "",
                category: blogdata.category || "",
                isPublished: blogdata.isPublished || false
            })
    }
    }, [blogdata])

    const handleChange = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.value
        })
    }

    const handleImage = (e) => {
        setImage(e.target.files[0])
    }

    const handleCheckbox = (e) => {
        setBlog({
            ...blog,
            [e.target.name]: e.target.checked
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        setLoading(true)
        // const formdata = new FormData()
        // formdata.append("title", blog.title)
        // formdata.append("description", blog.description)
        // formdata.append("category", blog.category)
        // formdata.append("isPublished", blog.isPublished)
        // formdata.append("image", image)
        try {
            axios.defaults.withCredentials = true
            const res = await axios.put("http://localhost:7000/api/v1/blogs/updateblog/"+id, blog)
            console.log(res)
            toast.success(res.data.message)
            setLoading(false)
        }
        catch (error) {
            setLoading(false)
            console.log(error)
            toast.error(error.response.message)
        }
    }
  return (
    <>
    <div className='bg-slate-700'>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="title" className="form-label">Title</label>
                <input type="text" name="title" value={blog.title} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="description" className="form-label">Description</label>
                <textarea rows={15} cols={50} name="description" value={blog.description} onChange={handleChange} className="form-control text-white outline-none" />
            </div>
            <div className="mb-3">
                <label htmlFor="category" className="form-label">Category</label>
                <input type="text" name="category" value={blog.category} onChange={handleChange} className="form-control" />
            </div>
            <div className="mb-3">
                <label htmlFor="image" className="form-label">Image</label>
                <input type="file" name="image" onChange={handleImage} className="form-control" />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" name="isPublished" value={blog.isPublished} onChange={handleCheckbox} className="form-check-input" />
                <label htmlFor="isPublished" className="form-check-label">Is Published</label>
            </div>
            <button disabled={loading} type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    </>
  )
}

export default Updateblog
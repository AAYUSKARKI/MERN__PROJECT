
import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function Admincard({blog}) {

    console.log(blog)
    const[loading,Setloading] = useState(false)

    const navigate = useNavigate()
    const handleDelete = async (e) => {
        e.preventDefault();
        Setloading(true)
        try {
            const res = await axios.delete(`http://localhost:7000/api/v1/blogs/deleteblog/${blog._id}`)
            console.log(res)
            toast.success(res.data.message)
            Setloading(false)
        } catch (error) {
            Setloading(false)
            console.log(error)
        }
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        navigate('/updateblog/' + blog._id)
    }
  return (
    <>
    <div className='bg-slate-700 flex p-5 gap-3 border-green-800'>
        <div className='px-2 py-4'>
        <img
              className=""
              src={blog.image}
              alt="blog image"
            />
        </div>
        <div>
            <div className='text-3xl text-white flex justify-center py-4'>
                {blog.title}
            </div>
            <div className='text-2xl text-white'>{blog.description}</div>
        </div>
        <div className='flex flex-col gap-2 justify-center'>
                    <button onClick={handleUpdate} className='text-white py-2 px-2 rounded-lg bg-slate-500 hover:bg-green-500 hover:p-4 active:bg-green-950'>Edit</button>
                    <button onClick={handleDelete} className='text-white py-2 px-2 rounded-lg bg-slate-500 hover:bg-red-600 hover:p-4 active:bg-red-950'>Delete</button>
                </div>
    </div>
    </>
  )
}

export default Admincard
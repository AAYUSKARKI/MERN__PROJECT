import React, { useState } from 'react'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'

function Register() {

  const navigate = useNavigate()

  const [Loading,setLoading] = useState(false)

    const [user,setUser] = useState({
        username:"",
        password:"",
        email:"",
    })

    const [avatar,setAvatar] = useState("")

    const handleChange = (e) => {
        setUser({...user,[e.target.id]:e.target.value})
    }

    const handleAvatar = (e) => {
        setAvatar(e.target.files[0])
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const formdata = new FormData()
            formdata.append("username",user.username)
            formdata.append("password",user.password)
            formdata.append("email",user.email)
            formdata.append("avatar",avatar)
            const res = await axios.post("http://localhost:7000/api/v1/users/register",formdata)
            console.log(res)
            toast.success(res.data.message)
            navigate('/login')
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error,'error')
            toast.error(error.response.data.message)
        }
    }
  return (
    <>
    <Header />
    <section className=' flex flex-col justify-center items-center'>
    <div className='mt-5 bg-white w-full max-w-md mx-2 rounded overflow-hidden p-4'>
      <h1 className='text-2xl text-blue-600'>Welcome To the Chat App</h1>
      <form onSubmit={handleSubmit} className='grid gap-3 mt-5'>
        <div className='flex flex-col gap-1'>
          <label htmlFor="username">Username</label>
          <input type="text"
           id="username"
           onChange={handleChange}
           value={user.username}
           className='bg-slate-100 px-2 py-1 outline-blue-500'
           placeholder='enter your name'
           required
            />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="email">Email</label>
          <input type="text"
           id="email"
           onChange={handleChange}
           value={user.email}
           className='bg-slate-100 px-2 py-1 outline-blue-500'
           placeholder='enter your email'
           required
            />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="password">Password</label>
          <input type="password"
           id="password"
           onChange={handleChange}
           value={user.password}
           className='bg-slate-100 px-2 py-1 outline-blue-500'
           placeholder='enter your password'
           required
            />
        </div>
        <div className='flex flex-col gap-1'>
          <label htmlFor="avatar">Avatar</label>
          <input type="file"
           id="avatar"
           onChange={handleAvatar}
           value={user.avatar}
           className='bg-slate-100 px-2 py-1 outline-blue-500'
           required
            />
        </div>
        <button className='bg-blue-500 text-white px-2 py-1 rounded'>
          {Loading ? <>
            <div
    className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
    role="status">
    <span
      className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
    >Loading...</span>
  </div>
          </> 
          : "Register"}
          </button>
      </form>
      <p className='text-black text-center'>Already have an account? <Link to="/login" className='text-blue-500'>Login</Link></p>
    </div>
    </section>
    </>
  )
}

export default Register
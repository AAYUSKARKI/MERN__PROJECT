import React, { useState } from 'react'
import Cookies from 'js-cookie'
import { useDispatch } from 'react-redux'
import { setAuthUser } from '../Redux/userslice'
import toast from 'react-hot-toast'
import axios from 'axios'
import { Link , useNavigate} from 'react-router-dom'

function Login() {

    const [Loading,setLoading] = useState(false)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const [user,setUser] = useState({
        username:"",
        password:"",
        email:"",
    })
    const handleChange = (e) => {
        setUser({...user,[e.target.id]:e.target.value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            setLoading(true)
            const res = await axios.post("http://localhost:7000/api/v1/users/login",user)
            console.log(res)
            toast.success(res.data.message)
            Cookies.set('accesstoken', res.data.data.accesstoken)
            axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.data.accesstoken}`      
            console.log(res.data.data.user)
            dispatch(setAuthUser(res.data.data.user))
            navigate('/')
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
          : "Login"}
          </button>
      </form>
      <p className='text-black text-center'>Don't have an account? <Link to="/register" className='text-blue-500'>Register</Link></p>
    </div>
    </section>
    </>
  )
}

export default Login
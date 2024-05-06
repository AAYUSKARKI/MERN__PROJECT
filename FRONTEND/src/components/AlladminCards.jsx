import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import io from 'socket.io-client'
import { setBlogs } from '../Redux/blogslice'
import { useGetallblogs } from '../Hooks/useGetallblogs'
import Admincard from './Admincards'
function AlladminCards() {
  const {blogs, loading, error} = useSelector(state => state.blog)

  const dispatch = useDispatch()

  const socket = io('http://localhost:7000')

  useGetallblogs()

  useEffect(() => {
    socket.on('connect', () => {
      console.log('connected')
    })
  
    socket.on('blogcreated', (data) => {
     console.log(data,'is the new data')
  
     dispatch(setBlogs([...blogs,data]))
    })
  }, [])
  

  console.log(blogs, loading, error)

  return (
    <>
    {
        loading ? <h1>Loading...</h1> : error ? <h1>{error}</h1> :
         blogs && blogs.map(blog => <Admincard key={blog._id} blog={blog}/>)
    }
    </>
  )
}

export default AlladminCards
import React from 'react'
import { useSelector } from 'react-redux'
import { useGetallblogs } from '../Hooks/useGetallblogs'
import Admincard from './Admincards'
function AlladminCards() {

  useGetallblogs()

  const {blogs, loading, error} = useSelector(state => state.blog)

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
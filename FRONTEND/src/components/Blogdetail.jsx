import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Commentbox from './Commentbox'

function Blogdetail() {
    
    const { id } = useParams()
    const {blogs} = useSelector(state => state.blog)

    const blog = blogs.find(blog => blog._id === id)
  return (
    <>
    <div className='overflow-y-auto'>
        <h1>{blog.title}</h1>
        <img src={blog.image} alt="" />
        <p>{blog.description}</p>

    </div>
    <Commentbox id={id}/>
    </>
  )
}

export default Blogdetail
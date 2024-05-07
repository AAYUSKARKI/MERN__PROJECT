import React from 'react'
import {Link} from 'react-router-dom'
function Blogcards({blog}) {

  const description = blog.description.substring(0, 100)
  console.log(blog)
  return (
    <>
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={blog.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link to={`/blogdetail/${blog._id}`}>Read more</Link></button>
    </div>
  </div>
</div>
    </>
  )
}

export default Blogcards
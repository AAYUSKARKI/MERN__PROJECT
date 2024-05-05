import React from 'react'

function Blogcards({blog}) {
  console.log(blog)
  return (
    <>
    <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src={blog.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{blog.title}</h2>
    <p>{blog.description}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </>
  )
}

export default Blogcards
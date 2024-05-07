import React from 'react'

function Commentcontainer({comments}) {

    
    console.log(comments,'is the comment')
  return (

    <>
     <div className='bg-slate-200 h-28 w-28 text-black'>
                {/* Map through comments array and render each comment */}
                {comments.map((comment, index) => (
                    <p className='text-3xl bg-green-400' key={index}>{comment}</p>
                ))}
            </div>
    </>
  )
}

export default Commentcontainer
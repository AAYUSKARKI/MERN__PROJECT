import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import Commentcontainer from './Commentcontainer'
import io from 'socket.io-client'
function Commentbox({id}) {


    const socket = io('http://localhost:7000')

    useEffect(() => {

        socket.on('connect', () => {
            console.log('connected')
        })

        socket.on('commentadded', (data) => {
            console.log(data, 'is the new data')
            setComments([...comments,data])
        })
    },[])

    const [comment,setComment]=useState('')
    const [comments,setComments]=useState([])

    const handlechange=(e)=>{
        setComment(e.target.value)
    }

    const handlecomment=async()=>{
        try {
            const res=await axios.post(`http://localhost:7000/api/v1/blogs/addcomment/${id}`,{comment})
            console.log(res)
            toast.success(res.data.message)
            setComments([...comments,comment])
            setComment('')
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }  
    }
  return (
   <>
   <Commentcontainer comments={comments}/>
   
   <div className="commentbox mt-20">
    <textarea cols="100" rows="5" onChange={handlechange}></textarea>
    <button className="btn btn-primary" type="submit" onClick={handlecomment}>Add</button>
   </div>
   </>
  )
}

export default Commentbox
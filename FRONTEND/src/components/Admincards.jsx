
import React,{useState} from 'react'
import Image from "../assets/download.png";

function Admincard() {
    const[loading,Setloading] = useState(false)
    const handleDelete = async (e) => {
        e.preventDefault();
        Setloading(true)
        setTimeout(()=>{
            alert('YOU ARE GOING TO DELETE THIS!ARE YOU OK?')
        },4000)
        Setloading(false)
    }

    const handleUpdate = (e) => {
        e.preventDefault();
        window.location.href=('/createblog')
    }
  return (
    <>
    <div className='bg-slate-700 flex p-5 gap-3 border-green-800'>
        <div className='px-2 py-4'>
        <img
              className=" dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src={Image}
              alt="Vercel Logo"
              width={1000}
              height={500}
              priority
            />
        </div>
        <div>
            <div className='text-3xl text-white flex justify-center py-4'>
                How to Ride your favourite Bike in foreign country?
            </div>
            <div className='text-2xl text-white'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, perferendis odit iure distinctio dolor itaque rem. Nihil, cupiditate? Minima eveniet vitae id laboriosam omnis quas assumenda voluptatum repudiandae voluptatibus possimus.
            Nisi praesentium, illum nam laudantium eos nulla maxime consequatur dolorum fuga natus unde fugit aut? Consectetur maiores quae mollitia. Ab repellat vero cupiditate ipsum non assumenda ex earum porro nesciunt.</div>
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
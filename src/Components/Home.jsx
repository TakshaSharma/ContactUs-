import React from 'react'
import image from '../assets/image.svg'
import { IoIosCall } from "react-icons/io";
import { MdOutlineMessage } from "react-icons/md";

function Home() {
  return (
    <div className='mt-[3rem] m-0 mx-auto max-w-[70%]'>
     
      <h1 className='text-6xl font-bold tracking-tight '>CONTACT US</h1>
      <p className='w-[900px] mt-7 text-zinc-700 font-medium'>
        LET'S CONNECT: WE'RE HERE TO HELP, AND WE'D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
     
     < div className='flex gap-[6rem]'>
     <div>

      <div className=' align w-[488px] mt-5'>
        <div className='gap-[48px] font-medium  flex'>
            <div className="bg-zinc-950 rounded flex items-center w-[220px]">
            <MdOutlineMessage className='text-zinc-50 text-2xl ml-2' />
            <button className=' text-slate-50 px-3 py-[8px] flex items-center'>VIA SUPPORT CHAT </button>
            </div>

            <div className='bg-zinc-950 rounded flex items-center w-[220px] justify-center'>
            <IoIosCall  className='text-zinc-50 text-2xl ml-2' />
            <button className=' text-slate-50 px-3 py-[8px] flex items-center'>VIA CALL </button>
            </div>   
        </div>
    </div>

        <div className="border-2 border-zinc-800 rounded flex items-center justify-center w-[488px] font-semibold mt-5">
            <MdOutlineMessage className='text-zinc-950 text-2xl ml-2' />
            <button className=' text-slate-950 px-3 py-[8px] '>VIA SUPPORT CHAT </button>
            </div>

            <div className="border-2 border-zinc-800 rounded flex items-center justify-center ml-[15px] w-[460px] font-semibold mt-5">
            <MdOutlineMessage className='text-zinc-950 text-2xl ml-2' />
            <button className=' text-slate-950 px-3 py-[8px] '>VIA SUPPORT CHAT </button>
            </div>

            <div className="border-2 border-zinc-800 rounded flex items-center justify-center ml-[15px] w-[460px] font-semibold mt-5">
            <MdOutlineMessage className='text-zinc-950 text-2xl ml-2' />
            <button className=' text-slate-950 px-3 py-[8px] '>VIA SUPPORT CHAT </button>
            </div>
            <div className="border-2 border-zinc-800 rounded flex items-start justify-start ml-[15px] w-[460px] h-[100px] font-semibold mt-5">
            <MdOutlineMessage className='text-zinc-950 text-2xl ml-4   mt-[10px]' />
            <button className=' text-slate-950 px-3 py-[8px] '>VIA SUPPORT CHAT </button>
            </div>   

            </div>
            <div className='w-full h-full object-cover'>
                <img src={image} alt="" />
            </div>

            </div>
        
   
    </div>
  )
}

export default Home

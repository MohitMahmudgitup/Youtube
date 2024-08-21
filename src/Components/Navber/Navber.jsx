import React, { useState } from 'react'
import Manu_icon from "../../assets/menu.png"
import Youtube_icon from"../../assets/pngwing.com.png"
import Search from "../../assets/search.png"
import Upload_icon from "../../assets/upload.png"
import More_icon from "../../assets/more.png"
import Notification_icon from "../../assets/notification.png"
import Admin_icon from "../../assets/simon.png"
import "../../index.css"
import "./Naveber.css"
import { Link } from 'react-router-dom'
function Navber({setSiteber}) {




  return (
    <header>
        <nav className=' w-[100%] h-[10vh] flex justify-between items-center p-2 md:p-8'>
            <div className='flex justify-center items-center md:gap4'>
                <div onClick={()=>setSiteber(p=>!p)} className='bg-white hidden md:flex w-10 h-10  justify-center items-center rounded-full cursor-pointer hover:bg-gray-200'>
                <img className='w-[18px] h-[18px] '  src={Manu_icon} alt="" />
                </div>
                <div className='flex cursor-Nav-Logo'>
                    <Link to={"/"}><img className='w-[90px] h-[25px] ' src={Youtube_icon} alt="" /></Link>
                    <p className="text-xs">BD</p>
                </div>
            </div>
            <div className=' overflow-hidden justify-between hidden md:flex  border border-1 border-gray-400 rounded-full'>
                <input className="w-[30vw]  outline-none border-none px-4 " type="text" placeholder='Search' />
                <div className='w-16  h-10 bg-gray-100  flex justify-center items-center'>
                <img  src={Search}alt="" />
                </div>
            </div>
            <div className='flex  w-40 justify-between items-center'>
                <img className='w-6' src={Upload_icon} alt="" />
                <img className='w-6' src={More_icon} alt="" />
                <img className='w-6' src={Notification_icon} alt="" />
                <img className='w-10 rounded-full ' src={Admin_icon} alt="" />
            </div>
        </nav>
    </header>
  )
}

export default Navber
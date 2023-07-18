import React from 'react'
import MenuItem from './MenuItem';
import { AiFillHome, AiOutlineLike } from "react-icons/ai";
import { MdSubscriptions, MdOutlineVideoLibrary,MdVideoSettings, MdOutlineWatchLater } from "react-icons/md";
import { GoHistory } from "react-icons/go";
import { useSelector } from 'react-redux';



const SideBar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
    const array1 = [
        {
            title: "Library",
            icon: <MdOutlineVideoLibrary/>,
        },
        {
            title: "History",
            icon: <GoHistory/>,
        },
        {
            title: "Your Videos",
            icon: <MdVideoSettings/>,
        },
        {
            title: "Watch Later",
            icon: <MdOutlineWatchLater/>,
        },
        {
            title: "Liked Videos",
            icon: <AiOutlineLike/>,
        },
    
    ]
  return !isMenuOpen? null : (
    <div className='col-span-1 mt-2'>
        <MenuItem title = "Home" icon= {<AiFillHome/>} />
        <MenuItem title = "Subscriptions" icon = {<MdSubscriptions/>} /> 
        <div className='h-0.5 my-3 mx-3  bg-slate-100' ></div>
        {array1.map((item, index) => {    
            return <MenuItem key={index} title={item.title} icon={item.icon}/>
        })}
        <div className='h-0.5 my-3 mx-3 bg-slate-100' ></div>
    </div> 
  )
}

export default SideBar;
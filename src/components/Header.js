import { BiSearch } from "react-icons/bi";
import React, {useEffect, useState} from 'react'
import { SIDE_BAR_LOGO_URL, USER_LOGO_URL, YOUTUBE_LOGO_URL, YT_SUGGEST_URL } from './util/config'
import { useDispatch } from "react-redux";
import { toggleMenu } from "./util/appSlice";

const Header = () => {
  const [searchText, setSearchText] = useState(""); 
  const dispatch = useDispatch();
  function handleClick(){
    dispatch(toggleMenu());
  }
  useEffect(()=>{
    getSuggestions();
  },[searchText]);

  const getSuggestions = async ()=>{
    const data =await fetch(YT_SUGGEST_URL + searchText);
    //const json = await data.json();
    console.log(data);
  }

  return (
    <div className='flex p-3 justify-between'>
      <div className='flex gap-4'>
        <img onClick={handleClick} className="h-6 mt-1 cursor-pointer" alt="Side bar logo" src={SIDE_BAR_LOGO_URL}/>
        <a href="/"><img className="h-16 -mt-4" alt="Youtube logo" src={YOUTUBE_LOGO_URL}/></a>
      </div>
      <div >
        <input onChange={(e)=>setSearchText(e.target.value)} className='border border-gray-300 p-4 h-10 w-[550px] rounded-l-3xl enabled:hover:border-gray-400' placeholder='Search' type='text'/>
        <button className="border border-gray-300 h-10 w-14 pl-4 relative top-[0.1rem] border-l-0 rounded-r-3xl bg-gray-50 hover:bg-gray-100"><BiSearch/></button>
      </div>
      <img className="h-8 mr-10" alt="User logo" src={USER_LOGO_URL}/>
      
    </div>
  )
}

export default Header
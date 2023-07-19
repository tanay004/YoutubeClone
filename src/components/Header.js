import { BiSearch } from "react-icons/bi";
import React, {useEffect, useState} from 'react'
import { SIDE_BAR_LOGO_URL, USER_LOGO_URL, YOUTUBE_LOGO_URL, YT_SUGGEST_URL } from './util/config'
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "./util/appSlice";
import { setAllVideos2 } from "./util/videoSlice";

const Header = () => {
  const [searchText, setSearchText] = useState(""); 
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const dispatch = useDispatch();
  const allVideos = useSelector(store => store.videos.vids1);

  function handleClick(){
    dispatch(toggleMenu());
  }
  const handleSearchClick = ()=>{
    const filteredVideos = allVideos.filter((video)=>{
      return video.snippet.title.toLowerCase().includes(searchText.toLocaleLowerCase())
    })
    dispatch(setAllVideos2(filteredVideos));
  }

  useEffect(()=>{
    const timer = setTimeout(()=>getSuggestions(), 200)
    const handleScroll = ()=>{
      setShowSuggestions(false);
      document.getElementById("suggestion-input").blur();
    }
    window.addEventListener("scroll", handleScroll);
    return ()=>{ 
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    }
  },[searchText]);

  const getSuggestions = async ()=>{
    const data =await fetch(YT_SUGGEST_URL + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
  }

  return (
      <div className='flex p-3 justify-between'>
        <div className='flex gap-4'>
          <img onClick={handleClick} className="h-6 mt-1 cursor-pointer" alt="Side bar logo" src={SIDE_BAR_LOGO_URL}/>
          <a href="/"><img className="h-16 -mt-4" alt="Youtube logo" src={YOUTUBE_LOGO_URL}/></a>
        </div>
        <div>
          <input id="suggestion-input" spellCheck="false" 
            onChange={(e)=>setSearchText(e.target.value)} 
            className='border border-gray-300 p-4 h-10 w-[550px] rounded-l-3xl enabled:hover:border-gray-400'
            onFocus={()=>setShowSuggestions(true)}
            onBlur={()=>setShowSuggestions(false)} 
            placeholder='Search' type='text'/>
          {showSuggestions && <div className="fixed bg-white w-[550px] p-3 rounded-lg">
            <ul>
              {suggestions.map((suggestion, index)=>{
                return <li key={index} className="flex gap-3 align-middle py-1 px-2 hover:bg-gray-100 rounded-md"><BiSearch className="mt-1.5"/>{suggestion}</li>
              })}
            </ul>
          </div>}
          <button 
            onClick={()=> handleSearchClick()}
            className="border border-gray-300 h-10 w-14 pl-4 relative top-[0.1rem] border-l-0 rounded-r-3xl bg-gray-50 hover:bg-gray-100"><BiSearch/>
            </button>
        </div>
        <img className="h-8 mr-10" alt="User logo" src={USER_LOGO_URL}/>  
      </div>
      
  )
}

export default Header
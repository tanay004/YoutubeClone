import VideoCard from "./VideoCard";
import React, { useEffect, useState } from 'react'
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { openMenu } from "./util/appSlice";
import { useDispatch } from "react-redux";
import { YT_API_URL } from "./util/config";

const MainContainer = () => {
    const [videos, setVideos] = useState([]);
    const dispatch = useDispatch();
    useEffect(()=>{
        getVideoData();
        dispatch(openMenu());
    },[])

    async function getVideoData(){
        const data = await fetch(YT_API_URL);
        const json = await data.json();
        setVideos(json.items);
        
    }
    if(!videos) return null;

    return (videos?.length===0)? (<Shimmer/>) :(
        <div className="col-span-11 flex flex-wrap gap-7 pl-10 pt-6">
            {videos.map((video,index)=>{
                
                return <Link to = {"/watch/"+ video.id } key={video.id}>
                    <VideoCard info={video}/>
                </Link>
            })}
        </div>
    )
}

export default MainContainer;
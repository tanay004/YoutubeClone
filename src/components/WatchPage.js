import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from './util/appSlice';
import { useParams } from 'react-router-dom';
import { Link, useLocation } from 'react-router-dom';
import { USER_LOGO_URL } from './util/config';
import { AiOutlineLike, AiOutlineDislike} from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { commentsData } from './util/config';

const Comment = ({data})=>{
    return <div className='flex gap-2 rounded-lg shadow-sm bg-gray-100 p-2 mb-2'>
        <img width="50px" src={USER_LOGO_URL}/>
        <div>
            <h1 className='font-bold'>{data.name}</h1>
            <p>{data.text}</p>
        </div>
    </div>
}
const CommentList = ({comments})=>{
    return comments.map((comment)=>{
        return (
            <>
            <Comment data = {comment}/>
            <div className=' pl-8 border border-l-black'>
                <CommentList comments={comment.replies}/>
            </div>
            </>
        )
    })
}

const WatchPage = (props) => {
    const location = useLocation();
    const propsData = location.state;
    const {snippet, statistics} = propsData;
    console.log(propsData);
    const dispatch = useDispatch();
    const {id} = useParams();
    const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    
    return (
        <div className={`${isMenuOpen? "" : "pl-20" } col-span-11 pt-5`} >
            <iframe width="850" height="515"
                src={"https://www.youtube.com/embed/" + id} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
            <div className='w-[850px]'>
                <h1 className='text-xl font-bold mt-3'>{snippet.title}</h1>
                <div className='grid grid-flow-col'>
                    <div className='mt-2 col-span-10'>
                        <img className='float-left mr-2 mt-1' width="45px" src = {USER_LOGO_URL}/>
                        <h1 className='font-bold'>{snippet.channelTitle}</h1>
                        <p >{statistics.likeCount} likes</p>
                    </div>
                    <div className='col-span-1 pt-3 text-right'>
                        <span className="pt-2 px-3 text-2xl bg-gray-200 rounded-l-full"><button><AiOutlineLike/></button></span>
                        <span className="pt-2 px-3 text-2xl bg-gray-200 rounded-r-full"><button><AiOutlineDislike/></button></span>
                    </div>
                    <div className='col-span-1 pt-2 justify-center text-right'>
                        <span className='bg-gray-200 py-1 px-6 text-2xl rounded-l-full rounded-r-full'><button><PiShareFatLight/></button></span>
                    </div>
                </div>
                
            </div>
            <div className='mt-5 w-[850px]'>
                <h1 className='font-bold text-lg mb-2'>Comments:</h1>
                <CommentList comments = {commentsData}/>
            </div>
        </div>
    )
}

export default WatchPage
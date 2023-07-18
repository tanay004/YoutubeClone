import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMenu } from './util/appSlice';
import { useParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch = useDispatch();
    const {id} = useParams();
    const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
    
    return (
        <div className={`${isMenuOpen? "" : "pl-20" } col-span-11 pt-5 `} >
            <iframe width="850" height="515"
                src={"https://www.youtube.com/embed/" + id} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
            </iframe>
        </div>
    )
}

export default WatchPage
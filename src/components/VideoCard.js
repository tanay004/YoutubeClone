
const VideoCard = ({info}) => {
    
    const {snippet, statistics} = info;
    const {channelTitle ,title, thumbnails} = snippet; 
  return (
    <div className='w-72 cursor-pointer'>
        <img className="rounded-lg" alt="thumbnail" src={thumbnails.high.url}/>
        <h1 className="font-bold">{title}</h1>
        <h1>{channelTitle}</h1>
        <h1>{statistics.viewCount} views</h1>
              

    </div>
  )
}

export default VideoCard
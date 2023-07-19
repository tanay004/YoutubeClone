import React from 'react'
import VideoCard from './VideoCard'

const ShimmerCard = ()=>{
  return <div className='w-72 h-52 bg-gray-200 rounded-lg'></div>
}

const Shimmer = () => {
  return (
    <div className='flex flex-wrap gap-6 mt-4 pl-16 pt-4 '>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
      <ShimmerCard/>
    </div>
  )
}

export default Shimmer
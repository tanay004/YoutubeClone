import React from 'react'


const MenuItem = ({title, icon}) => {
  return (
    <div className='ml-2 flex px-1 py-2 cursor-pointer hover:bg-gray-100 rounded-md'>
        <span className='pt-1 pl-2 pr-2'>{icon}</span>
        <span className='text-lg'>{title}</span>
    </div>
  )
}

export default MenuItem
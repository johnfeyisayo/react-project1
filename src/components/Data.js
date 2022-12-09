import React from 'react'
import img from './pexels-trista-chen-723198.jpg'
export default function Data({title, body}) {

  return (
    <div  className='single-movie'>
    <div>
    <img src={img} alt='' className='single-img' />
    </div>
      <h2>{title}</h2>
      <h4>{body}</h4>
        
    </div>
  )
}


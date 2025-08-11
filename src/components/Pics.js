import React from 'react'

export default function Pics(props) {
  return (
    <div className='pic'>
        <h4>Rating</h4>
        <div className='pic-info'>
            <img src={props.img} alt={props.title} />
            <p>
                {props.title}
            </p>
        </div>
        <p>{props.review}</p>
    </div>
  )
}

import React from 'react'
import { Link  } from 'react-router-dom'

export default function Card(props , Children) {
  return (
    <Link key={props.id} to={`/order-online/${props.id}`} className="card-link" style={{ textDecoration: "none" }}>
    <div className="card">
        <img src={props.image} alt={props.title} />
        <h4>{props.title}</h4>
        <p>{props.price}</p>
        <p>{props.description}</p>
      </div>
      
    </Link>

      

      
  );
}


import React from 'react'
import './style.css'

export default function Movie(props) {
  return (
    <div className='movies'>
      <img
        src={props.imageSrc}
        alt={props.title}
      />
      <h2>{props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
}

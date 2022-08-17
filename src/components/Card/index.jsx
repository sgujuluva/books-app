import React from 'react'
import Bookcover from "../../images/bookcover.png"
import "./Card.css"
function Card({book}) {
  return (
    <div className="card">
 <div className="card-wrapper">
        <img src={Bookcover} alt="" />
        <div className="bottom">
          {book.map((book,index) =>{
            return (<div key={index}> 
            {book.volumeInfo.title}</div>)
            
            
          })}
            <h3 className="title">React JS</h3>
            <p className="amount">3290</p>
        </div>
        </div>
    </div>
  )
}

export default Card
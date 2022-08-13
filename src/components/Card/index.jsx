import React from 'react'
import Bookcover from "../../images/bookcover.png"
import "./Card.css"
function Card() {
  return (
    <div className="card">
        <img src={Bookcover} alt="" />
        <div className="bottom">
            <h3 className="title">React JS</h3>
            <p className="amount">3290</p>
        </div>

    </div>
  )
}

export default Card
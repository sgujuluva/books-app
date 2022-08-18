import React from 'react'
import Bookcover from "../../images/bookcover.png"
import "./Card.css"
function Card({book}) {
  return (
    <div className="card">
 <div className="card-wrapper">
        {/* <img src={Bookcover} alt="" /> */}
        <div className="bottom">
          {book.map((book,index) =>{
            return (<div key={index}> 
           <h1 className="title">{book.volumeInfo.title}</h1>
           <h3 className="sub-title">{book.volumeInfo.subtitle}</h3>
           <h2 className="author">{book.volumeInfo.authors}</h2>
           <h4 className="pub-date">{book.volumeInfo.publishedDate}</h4>
           <div className="thumbnail">{book.imageLinks.thumbnail}</div>
        
            </div>)
            
            
          })}
            
        </div>
        </div>
    </div>
  )
}

export default Card
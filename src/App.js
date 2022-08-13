//lib react
import { useState, useEffect } from "react";
//components
import Card from "./components/Card";
//styles
import "./App.css";

/* //fetching api
const apiFetch = async () => {
  let response = await fetch("https://www.googleapis.com/books/v1/volumes?q='+search+&key=AIzaSyBGxpDYEOpN8ihF0iRPm2BqRa5EBfJq-yk");
  let data= await response.json();
  return data;
} */
function App() {
  //state for user input search
  const [search, setSearch] = useState("");
  //state for data from api
  const [bookData, setBookData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      fetch(
        `https://www.googleapis.com/books/v1/volumes?q=` +
          search +
          `&key=AIzaSyBGxpDYEOpN8ihF0iRPm2BqRa5EBfJq-yk`
      ).then((res) =>  setBookData(res.data.items))
      .catch(err => console.log("error"))
    }
  };
  
  /* //useeffect to fetch api
useEffect(() => {
apiFetch(search)
.then(result => setBookData(result.data.items) )

},[])
console.log(bookData) */

  //search click function
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <div className="header">
        <div className="heading">
          <h1>Books are a uniquely Portable magic</h1>
        </div>
        <div className="search">
          <h2>Search a Book</h2>
          <form onSubmit={handleSubmit}>
            <input
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              value={search}
              placeholder="Type a Book name"
               onKeyPress={searchBook}
            />
            <button>Search</button>
          </form>
          <div className="container">
          <Card/>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;

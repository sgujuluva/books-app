//lib react
import { useState, useEffect } from "react";
//components
import Card from "./components/Card";
//styles
import "./App.css";

function App() {
  //state for user input search
  const [search, setSearch] = useState("");
  //state for data from api
  const [bookData, setBookData] = useState([]);
  //fetching api
  const apiFetch = async (search) => {
    let response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${search}&key=AIzaSyBGxpDYEOpN8ihF0iRPm2BqRa5EBfJq-yk`
    );
    let data = await response.json();
    return data;
  };

  //search click function
  const handleSubmit = (e) => {
    e.preventDefault();
    apiFetch(search).then((result) => {
      console.log(result);
      setBookData(result.items);
    });
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
              onKeyPress={apiFetch}
            />
            <button>Search</button>
          </form>
          
        </div>
        
      </div>
      {/* <div className="container"> */}
      <Card book={bookData} />
          {/* </div> */}
    </div>
  );
}

export default App;

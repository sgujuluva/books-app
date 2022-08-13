//lib react
import {useState} from "react";
//styles
import "./App.css";

function App() {
const [search,setSearch] = useState("");
//search click function
const handleSubmit = (e) => {
  e.preventDefault();
  console.log(search)
}

  return (
    <div className="App">
      <div className="header">
        <div className="heading">
          <h1>Books are a uniquely Portable magic</h1>
        </div>
        <div className="search">
          <h2>Search a Book</h2>
          <form onSubmit={handleSubmit}>
            <input onChange={(e) => setSearch(e.target.value)} type="text" value = {search} placeholder="Type a Book name" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

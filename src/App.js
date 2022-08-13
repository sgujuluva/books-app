//styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="heading">
          <h1>Books are a uniquely Portable magic</h1>
        </div>
        <div className="search">
          <h2>Search a Book</h2>
          <form>
            <input type="text" placeholder="Type a Book name" />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;

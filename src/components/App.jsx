import React, { useState } from "react";
import List from "./List";
function App() {
  var isClicked = false;
  const [input, setInput] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;

    setInput(newValue);
  }
  function addItems(event) {
    setItems(prevValue => {
      return [...prevValue, input];
    });
    event.preventDefault();
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <form onSubmit={addItems}>
          <input onChange={handleChange} type="text" value={input} />
          <button type="submit">
            <span>Add</span>
          </button>
        </form>
      </div>
      <div>
        <ul>
          {items.map(item => {
            return <List item={item} isClicked={isClicked} />;
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;

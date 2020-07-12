import React from "react";

function App() {
  
  const [input, setInput] = useState("");
  const [items,setItems] = useState([]);
  function handleChange(event) {
    const newValue = event.target.value;
    
    setInput(newValue);
    
    
  }
  function addItems(event) {
   setItems(prevValue=>{
     return [...prevValue,input]
   });
    event.preventDefault();
    setInput('');
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
            return <li>{item} </li>;
          })}
          
        </ul>
      </div>
    </div>
  );
}


export default App;

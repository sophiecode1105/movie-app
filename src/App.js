import logo from './logo.svg';
import {useState, useEffect} from "react"
import './App.css';

function App() {
  const [toDo, setTodo] = useState('')
  const onChange = (event)=>{
    setTodo(event.target.value)
  }

console.log(toDo)

  return (
    <div className="App">
      <input onChange= {onChange} 
              value = {toDo}
              type = "text" 
              placeholder = "wirte your to do">
       </input>
    </div>
  );
}

export default App;

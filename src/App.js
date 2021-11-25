import logo from './logo.svg';
import {useState, useEffect} from "react"
import './App.css';

function App() {
  const [counter,setValue] = useState(0);
  const [keyword, setKeyword] = useState('')
  const onClick = () =>setValue((prev)=>prev+1)
  const onChange = (event) => setKeyword(event.target.value)
  
  useEffect(()=>{console.log("search for",keyword)},[keyword])
  return (
    <div className="App">
      <input 
      value = {keyword}
      onChange = {onChange} 
      type="text" 
      placeholder="search here">
      </input>
      <hi>{counter}</hi>
      <button onClick ={onClick}>click me</button>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import {useState, useEffect} from "react"
import './App.css';

function App() {
  const [toDo, setTodo] = useState('')
  const [toDos,setTodos] = useState([])
  const onChange = (event) => {
    setTodo(event.target.value)
  }
  const onSubmit = (event) => {
    event.preventDefault();
    if( toDo === ""){
      return;
    }
    
    setTodos((currentArray) => [toDo,...currentArray])
    setTodo("");
    console.log(toDos)
  }


 //form submit 내장되어있음. 찾아보기
  return (
    <div className="App">
      <h1>My ToDos({toDos.length})</h1>
      <form onSubmit = {onSubmit}>
      <input onChange= {onChange} 
              value = {toDo}
              type = "text" 
              placeholder = "wirte your to do">
       </input>
       <button>Add To Do</button>
       </form>
       <hr />
       <ul>
       {toDos.map((todo, index)=>{
        return <li key={index}>{todo}</li>
       })}
       </ul>
    </div>
  );
}

export default App;

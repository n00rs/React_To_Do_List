// import logo from './logo.svg';
import {useState} from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import To_do_header from './components/To_do_header';


function App() {
  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([])

  let obj = {todoInput,setTodoInput,todos,setTodos} ;
// console.log(obj);
  return (
    <div className="App">
      {todoInput}
      <To_do_header />
      <Form {...obj}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
import { useState, useEffect } from 'react'
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import To_do_header from './components/To_do_header';


function App() {

  const [todoInput, setTodoInput] = useState("")
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodo, setFilteredTodo] = useState([]);


useEffect(()=> fetchLocal(), [])

  useEffect(() => {
    // console.log('inside use effect');
     filtering()
     saveInLocal()
  }, [todos, status])



  const filtering = () => {
    switch (status) {

      case "completed":
        setFilteredTodo(todos.filter((todos) => todos.status === true))
        break;

      case "uncompleted":
        setFilteredTodo(todos.filter(todo => todo.status === false))
        break;

      default:
        setFilteredTodo(todos)
        break;
    }
  }

  const saveInLocal = () => {
    if(todos.length>0)
    localStorage.setItem('todos', JSON.stringify(todos))
  }
  const fetchLocal = () => {
    if (localStorage.getItem('todos') === null){
      
      localStorage.setItem('todos', JSON.stringify([]))
    }else{
      let localStore = JSON.parse(localStorage.getItem('todos'))
      setTodos(localStore)
    }
      // setTodos( JSON.parse( localStorage.getItem('todos')))
  }


  let obj = { todoInput, setTodoInput, todos, setTodos, setStatus };
  // console.log(obj);
  return (
    <div className="App">
      {todoInput}
      <To_do_header />
      <Form {...obj} />
      <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodo} />

    </div>
  );
}

export default App;

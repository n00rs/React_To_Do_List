import React from 'react'

function Todo({ todo, status, id, setTodos, todoArray }) {
    // console.log(todo , status, id)
    const deleteTodo = () => {
        
        setTodos(todoArray.filter((todo) => todo.id !== id))       // console.log(id);
    }
    
    const changeStatus =()=>{
        setTodos(todoArray.map((todo)=>{
            if(todo.id === id) {
                return{...todo,
                     status: !todo.status}
            }
            return todo                                         
        }))
    }
    
    return (
        <div className='todo'>
            <button onClick={changeStatus} className='complete-btn'>
                <i className='fas fa-check'></i>
            </button>
            <li className={`todo-item ${status ? "completed": ""}`}>{todo}</li>

            <button onClick={deleteTodo} className='trash-btn'>
                <i className='fas fa-trash'>

                </i>
            </button>
        </div>
    )
}

export default Todo
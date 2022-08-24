import React from 'react'

function Form({ todoInput, setTodoInput, todos, setTodos }) {

    const TodoInput = (e) => {
        setTodoInput(e.target.value);
        // setToDoInput = e.target.value
    }

    const submitTodo = (e) => {
        console.log(`inside subit`);
        e.preventDefault();
        setTodos([
            ...todos,
            { todo: todoInput, status: false, id: Date.now() }
        ])
        setTodoInput("")

    }


    return (
        <div>
            <form>
                <input value={todoInput} onChange={TodoInput} type="text" className="todo-input" />
                <button onClick={submitTodo} className="todo-button" type="submit">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select name="todos" className="filter-todo">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Form
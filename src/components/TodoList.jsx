import React from 'react'
import Todo from './Todo'

function TodoList({ setTodos, todos, filteredTodos }) {
    return (
        <div className='todo-container'>
            <ul className='todo-list'>
                {
                    filteredTodos.map((todo) => (
                        <Todo {...todo} setTodos={setTodos} todoArray={todos} />
                        // return null
                    ))
                }

            </ul>

        </div>
    )
}

export default TodoList
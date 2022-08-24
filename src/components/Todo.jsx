import React from 'react'

function Todo({todo, status, id}) {
  return (
    <div className='todo'>
        <button className='complete-btn'>
            <i className='fas fa-check'></i>
        </button>
        <li className='todo-item'>{todo}</li>
       

        <button className='trash-btn'>
            <i className='fas fa-trash'>

            </i>
        </button>
        Todo</div>
  )
}

export default Todo
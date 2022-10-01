import React from 'react'

function To_do_header() {
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
  return (
    <div>
         <header>
      <h3>{days[ new Date().getDay()]}'s Todo List</h3>
    </header>

    </div>
  )
}

export default To_do_header
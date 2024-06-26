import React, { useState } from "react"
// import { useState } from 'react'
import {CreateTodo} from './components/CreateTodo'
import { Todos } from './components/Todos'
import './App.css'

function App() {
  const [todos , setTodos] = useState([]);

  fetch("http://localhost:2001/todos")
    .then(async function(res) {
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <div>
       <CreateTodo />
       
        {/* <Todos todos={[
        {
          title : "GYM",
          discription : "To to Gym",
          completed : false
        }
       ]} /> */}
       <Todos todos={todos} />
    </div>
  )
}

export default App



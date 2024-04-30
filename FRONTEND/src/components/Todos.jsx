import React from "react"

export function Todos({todos}){
    return <div>
        {todos.map(function(todo){
            return <div>
                <h2>{todo.title}</h2>
                <h4>{todo.discription}</h4>
                <button>{todo.completed == true ? "Completed" : "Mark as complete"}</button>
            </div>
        })}
    </div>
}

/* not have to rander things static
    <h2>GYM</h2>
    <h4>Go to gym to have a healthy body</h4>
    <button>Mark as Done!</button> 
*/
import React, { useState } from "react"

const ChildComponent = ({todos,updateStatus}) =>{

    return (
        
       <div>
        <h1>Child Component</h1>
        <ul>
           {
            todos.map((todo)=>{
                return(
                    <li>
                        {todo.text}
                        {!todo.isCompleted && <button onClick={() => updateStatus(todo.id)}>Complete</button>}
                    </li>
                )
            })
           }
               
        </ul>
        </div>

    )
}

export default ChildComponent;



import React,{useState} from "react"
import ChildComponent from "./ChildComponent";
const ParentComponent = () =>{

    const [todos,setTodos]=useState([
        {id:1 , text : "Learn React", state :false},
        {id:2 , text : "Build a React App", state :false},
        {id:3 , text : "Deploy the React app", state :false}
    ])

    // updating state true
    const updateStatus = (taskid) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === taskid) {
            todo.state = completed;
          }
          return todo;
        });

        
        setTodos(updatedTodos);
      };
    

    return (
       <div>
        <h1>ParentComponent</h1>
        <ChildComponent todos={todos}  updateStatus={updateStatus}  />     
        </div>

    )
}

export default ParentComponent;
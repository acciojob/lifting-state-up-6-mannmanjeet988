import React,{useState} from "react"
import ChildComponent from "./ChildComponent";
const ParentComponent = () =>{

    const [todos,setTodos]=useState([
        {id:1 , text : "Learn React", completed :false},
        {id:2 , text : "Build a React App", completed :false},
        {id:3 , text : "Deploy the React app", completed :false}
    ])

    // updating state true
    const updateStatus = (taskid) => {
        const updatedTodos = todos.map((todo) => {
          if (todo.id === taskid) {
            todo.completed = true;
            //     return {...todo, completed:true}
          }
          return todo;
        } );
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
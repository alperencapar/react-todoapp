import React from 'react'
import Todo from "./Todo";

const Todos = (props) => {

    return (
         
            <div className="todos-container">
                <div className="todos">
                
                {props.todos.map( todo => (
                    <Todo 
                        key = {todo.id}
                        todo = {todo}
                        FaTimes = {props.FaTimes}
                        FaCheck = {props.FaCheck} 
                        deleteTodo = {props.deleteTodo}
                        todoToggle = {props.todoToggle}
                    />
                ))}
                   
                    
                </div>
            </div>
        
        
        
    )
}

export default Todos;
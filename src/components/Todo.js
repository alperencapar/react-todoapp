import React from 'react'

const Todo = (props) => {
    return (
        <div 
            className={(props.todo.completed ? 'todo completed' : 'todo')}
            data-id={props.todo.id}
        >
            {props.todo.text}
            <div className="btn-container">
                <button onClick={(e) => props.todoToggle(e)}>{props.FaCheck}</button>
                <button onClick={(e) => props.deleteTodo(e)}>{props.FaTimes}</button>
            </div>
        </div>
    )
}

export default Todo

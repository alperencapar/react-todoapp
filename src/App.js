import './App.css';
import React, { useState } from "react"

// import packages below this line
import { v4 as uuidv4 } from 'uuid'                                   //unique id package
import { FaPlusCircle, FaTimes, FaCheck } from "react-icons/fa";      //icon package

// import components below this line
import Form from './components/Form.js';
import Todos from './components/Todos.js'

function App() {

  const [todos, setTodos] = useState([])


  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), text: todo, completed: false}])
   
  }

  const findTodoID = (e) => {
    const todoID = e.target.parentElement.parentElement.dataset.id
    return todoID
  }

  const deleteTodo = (e) => {
    
    const todoID = findTodoID(e)
    
    setTodos(todos.filter((element) => element.id !== todoID))
  }

  const todoToggle = (e) => {

    const todoID = findTodoID(e)

    setTodos(todos.map((element) => {
      if (element.id === todoID) {
        return {
          ...element, completed: !element.completed
        } 
      }
      return element
    }))
  }

  return (
    
      <>
      <div id="section-container">
        <h2>Todo List</h2>
        <Form 
          FaPlusCircle = {<FaPlusCircle />}
          addTodo = {addTodo}
        />

      <Todos 
        todos = {todos} 
        FaTimes = {<FaTimes className="fas fa-times" />}
        FaCheck = {<FaCheck className="fas fa-check" />}
        deleteTodo = {deleteTodo}
        todoToggle = {todoToggle}
      />

      </div>
      </>
    
  );
}

export default App;

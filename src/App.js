import './App.css';
import React, { useState, useEffect } from "react"

// import packages below this line
import { v4 as uuidv4 } from 'uuid'                                   //unique id package
import { FaPlusCircle, FaTimes, FaCheck } from "react-icons/fa";      //icon package

// import components below this line
import Form from './components/Form.js';
import Todos from './components/Todos.js'

function App() {

  const [todos, setTodos] = useState([])

  //run once when page loaded
  useEffect(() => {
    const getLocalTodos = () =>{
      if(isTodosOnLocalStorage()){
        let localStorageTodos = JSON.parse(localStorage.getItem("todos"))
        setTodos(localStorageTodos)
      }
    }
    //calling function above
    getLocalTodos()
  },[])

  useEffect(() => {

    //! functions defined inside useEffect beacuse of this issue:
    //https://github.com/facebook/react/issues/14920

    
  // local storage todo setter
  const saveTodosToLocal = () => {
    if(isTodosOnLocalStorage()){
      //if todos on local storage, set todos state
      localStorage.setItem("todos", JSON.stringify(todos))

    }
  }
    //calling function above
    saveTodosToLocal()
  }, [todos])

  const addTodo = (todo) => {
    setTodos([...todos, {id: uuidv4(), text: todo, completed: false}])
   
  }

  // finding todo id from special data attr.
  const findTodoID = (e) => {
    const todoID = e.target.parentElement.parentElement.dataset.id
    return todoID
  }

  const deleteTodo = (e) => {
    
    const todoID = findTodoID(e)
    setTodos(todos.filter((element) => element.id !== todoID))
  }

  //toggling todo complete property
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

    //check if todos on local storage or not
    const isTodosOnLocalStorage = () => {

      if(localStorage.getItem('todos') === null){
        localStorage.setItem('todos', JSON.stringify([]))
        return false
      }
  
      return true
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

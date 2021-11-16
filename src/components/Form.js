import React, { useState } from 'react'
import Input from './Input.js'

const Form = (props) => {

    const [value, setValue] = useState('')
    
    //setting input value
    const handleFormInput = (inputText) => {
        setValue(inputText)
    }

    //! added to dealt with todo and clearing input.(hooks are asynchronous!)
    const todoAndValueHandler = async () =>{
        await sendValueToTodoSetter()
        clearInput()
    }

    //handler function to addTodo function that adds todo to todo state
    const sendValueToTodoSetter = () => {
        props.addTodo(value)

    }

    const clearInput = () => {
        setValue('')
    }

    return (
        <div className="form-container">
            <form>
                <div className="form-row">

                    <Input 
                        FaPlusCircle = {props.FaPlusCircle} 
                        value = {value}
                        changeValue = {(text) => handleFormInput(text)}
                        sendValueToTodoSetter = {todoAndValueHandler}
                    />
                    
                </div>
            </form>
            
        </div>
    )
}

export default Form

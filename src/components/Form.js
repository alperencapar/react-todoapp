import React, { useState } from 'react'
import Input from './Input.js'

const Form = (props) => {

    const [value, setValue] = useState('')
    

    const handleFormInput = (inputText) => {
        setValue(inputText)
    }

    const sendValueToTodoSetter = () => {
        props.addTodo(value)
        
    }

    return (
        <div className="form-container">
            <form>
                <div className="form-row">

                    <Input 
                        FaPlusCircle = {props.FaPlusCircle} 
                        value = {value}
                        changeValue = {(text) => handleFormInput(text)}
                        sendValueToTodoSetter = {sendValueToTodoSetter}
                    />
                    
                </div>
            </form>
            
        </div>
    )
}

export default Form

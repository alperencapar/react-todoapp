import React from 'react'

const Input = (props) => {

    const handleSubmit = (e) => {
        
        e.preventDefault()
        props.sendValueToTodoSetter()
    }
   
    return (
        <>
            <input type="text" name="" id="valueInput" 
                onChange={(e) => props.changeValue(e.target.value)}
            />

            <button id="" type="submit" 
            onClick={(e) => {handleSubmit(e)}}>
            {props.FaPlusCircle}
            
            </button>
        </>
    )
}

export default Input

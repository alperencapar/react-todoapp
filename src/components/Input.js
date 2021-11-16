import React from 'react'

const Input = (props) => {

    const handleButtonClick = (e) => {
        
        e.preventDefault()
        props.sendValueToTodoSetter()
        // e.target.previousSibling.value=""
    }
   
    return (
        <>
            <input type="text" name="" id="valueInput" 
                onChange={(e) => props.changeValue(e.target.value)}
                value={props.value}
            />

            <button id="" type="submit" 
                onClick={(e) => {handleButtonClick(e)}}
            >
            {props.FaPlusCircle}
            
            </button>
        </>
    )
}

export default Input

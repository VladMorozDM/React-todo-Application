import React from 'react';

export default ({key, details: props, handleChange})=> {
    const stylesUndone ={
      backgroundColor: "#FA8072",
      transition: "1.5s"
    }
    const stylesDone = {
      backgroundColor: "#98FB98",
      transition: "1.5s"
    }
    return (
    <div className ="todo-item" style={props.completed 
                                       ? stylesDone
                                       : stylesUndone}>
      <input type="checkbox" 
        checked = {props.completed} 
        onChange = {() => handleChange(props.id)}
      />
      <p>{props.text}</p>
    </div>
            
  )
}
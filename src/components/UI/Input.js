import React from 'react';
import classes  from './Input.module.css';


const Input = (props) => {
  // const inputVal = props.input
  return(
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.lable}</label>
      {/* <input id={inputVal.id} 
        type={inputVal.type} 
        min={inputVal.min}/> */}

      <input {...props.input}/>  
    </div>
  )
}


export default Input;
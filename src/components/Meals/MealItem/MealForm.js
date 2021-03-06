import React from 'react';
import Input from '../../UI/Input';
import classes from './MealForm.module.css';


const MealForm = (props) => {
  return( 
    <form className={classes.form}>
      <Input lable="Amount" input={{
        id: 'amout_' + props.id,
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
        }} />
      <button>+ Add</button>
    </form>
  )
}

export default MealForm;
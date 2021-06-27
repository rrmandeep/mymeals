import React from 'react';
import MealSummay from './MealSummary'
import AvailableMeals from './AvailableMeals'

const Meals = () => {
  return (
    <React.Fragment>
      <MealSummay />
      <AvailableMeals />
    </React.Fragment>
  );
}

export default Meals;
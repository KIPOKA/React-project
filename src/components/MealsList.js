import React from 'react'
import { useMealsListContext } from './MealsContext';

const MealsList=() =>{
    const {meals}= useMealsListContext();
    return (
      <div>
      <h1>Meals List using context API</h1>
      {meals.map((meal, index)=>
        <h2 key={index} style={{border: '2px solid #05AD80', width: '390px',height:'50px', marginLeft:'40%'}}>{meal}</h2>
      )}
      </div>
    )
} 

export default MealsList
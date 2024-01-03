import React, { useState } from 'react'
import { useMealsListContext } from './MealsContext';

const Counter=() =>{
    const {meals}= useMealsListContext();
    return (
      <div>
            <h1>MNumber of meals today: {meals.length}</h1>
       
      </div>
    )
}

export default Counter;
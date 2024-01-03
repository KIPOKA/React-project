import React from "react";

const MealsContext = React.createContext();
const todaysMeals = ['Chicken Alfredo',
'Salad with Grilled Salmon',
'Vegetarian Stir-Fry',
'Quinoa Bowl with Veggies',
'Grilled Chicken Caesar Salad'
]

const MealsProvider = ({children}) =>{
    const [meals, setMealsList]= React.useState(todaysMeals);
    return(
        <MealsContext.Provider value={{meals}}>
            {children}
        </MealsContext.Provider>
    )
}
export const useMealsListContext =()=> React.useContext(MealsContext);
export default MealsProvider;
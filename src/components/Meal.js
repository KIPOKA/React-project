
import React, { useState } from 'react'
const Todo = props =>(
    <tr>
        <td>
            <label>{props.id}</label>
        </td>
        <td>
            <input/>
        </td>
        <td>
            <label>{props.createdAt}</label>
        </td>
    </tr>
);

function Meal (){
    const [todos, setToDos]=useState([{
        id:"todo1",
        createdAt:'18:08'

    },{
        id:"todo2",
        createdAt:'09:34'
    }]);
    const reverseOrder=()=>{
            setToDos([...todos].reverse())
    }
  return(
        <div>
            
            <table>
                <tbody>
                    {todos.map((todo, index) =>(
                        <Todo key={index} id={todo.id}  createdAt ={todo.createdAt}/>
                    ))}
                </tbody>
            </table>
            <button onClick={reverseOrder}>
                Reverse Order
            </button>
        </div>

  );
  
}
export default Meal;
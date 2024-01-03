import React, { useState } from 'react'
import "../App.css"

function Feedback() {
    const [score, setScore] = useState("10");
    const [comment, setComment]= useState("");   
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(Number(score) <=5 && comment.length <=10){
            alert("Please provide a comment explaining why the experience was poor.");
            return;
        }
        console.log("Form submitted!")
        setComment("");
        setScore("10")
    }   
    
  return (
    <div className='App'> 
        <form onSubmit={handleSubmit}>
                <fieldset> 
                        <h2>Feedback Form</h2>  <br></br>
                        <div className='Field'>
                            <label> Score: {score} </label>
                            <br></br>
                            <input 
                                id='comment'
                                type='range'
                                min="0" 
                                max="10"
                                value={score}
                                onChange={e => setScore(e.target.value)}
                            />
                        </div>
                        <br></br> 
                        <div className='Field'>
                            <label  htmlFor='comment'>Comment:</label>
                            <br></br>
                            <textarea value={comment} onChange={e => setComment(e.target.value)}/> 
                        </div> 
                    <button disabled={!comment} type='submit'>Submit</button>
                </fieldset>
        </form>
   </div>
  )
}

export default Feedback;


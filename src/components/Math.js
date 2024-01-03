
 
import React, {useRef} from 'react'; 

function MathTest() {
  const [result, setResult] = React.useState('Eat')
  
  const inputRef =useRef(null);
  const plus =(e) =>{
    e.preventDefault();
    setResult((result)=> result +Number
    (inputRef.current.value));
  }

  const minus =(e) =>{
    e.preventDefault();
    setResult((result)=> result  - Number
    (inputRef.current.value));
  } 

  const multiply =(e) =>{
    e.preventDefault();
    setResult((result)=> result * Number
    (inputRef.current.value));
  }
  const divide =(e) =>{
    e.preventDefault();
    setResult((result)=> result  / Number
    (inputRef.current.value));
  }

  const resetInput =(e) =>{
    e.preventDefault();
    setResult((result)=> inputRef.current.value=0);
  }
  const resetAnswer =(e) =>{
    e.preventDefault();
    setResult((prevVal)=> prevVal *0);
  }
  return (
    <div className="App">
      <div>
        <h1>Simplest working calculator</h1>
      </div>
      <form>
        <p>
          Result: {result}
        </p>
        <input 
          pattern='[0-9]'
          ref={inputRef}
          type='number'
          placeholder='Type a number'
        />
        <br></br>
        <button onClick={plus}>Add </button>
        <button onClick={minus}>Subtract </button>
        <button onClick={multiply}>Multiply </button>
        <button onClick={divide}>Divide </button>
        <button onClick={resetAnswer}>result result </button>
        <button onClick={resetInput}>Result input </button>
      </form>
       </div>
  );
}

export default MathTest;

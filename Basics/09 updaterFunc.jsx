/* 
updated function =  A function passed as and argument to setState() usually
                    ex. setYear(arrow function)
                    Allow for safe updates based on the previous state
                    Used with multiple state updates and asynchornous function
                    Good practice to use updater functions
*/

/* 
Uses the current state to calculate the NEXT state.
set functions do not trigger an update.
React batches together state updates for performance reasons.
NEXT state becomes the CURRENT state after and update
*/
 

import { useState } from "react";

export default function MyCounter(){
    const [counter, setCounter] = useState(0)
    
    function increment(){
// Using updater functions, React will update the states one by one, not batching them together
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
        setCounter(prevCounter => prevCounter + 1)
    }

    function decrement(){
        setCounter(c => c - 1)
    }

    function reset(){
        setCounter(0)
    }


    return(
        <div>
            <h2>Counter: {counter}</h2>
            <br/>
            <div>
            <button onClick={increment} >Incease with 3</button>
            <button onClick={decrement} >Decrease with 1</button>
            <button onClick={reset} >Reset</button>
            </div>
        </div>
    )
}
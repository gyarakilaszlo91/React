/* 
userRef()   "use Reference" Does not cause re-renders when its value changes.
            When you want a component to "remember" some information,
            but you don't want that information trigger new renders.

            1. Accessing/Interacting with DOM elements
            2. Handling Focue, Animations, and Transmitions
            3. Managing Timers and Intervals
*/

import { useState, useEffect, useRef } from "react";


export default function MyComponent(){

    // useRef returns an Object, you can set a current value
    const ref = useRef(0);
    // storing html elements in ref
    const inputRef = useRef(null);

    function handleClick(){
        ref.current++;
    
        // focusing the element without rerendering the component
        inputRef.current.focus();
        // changing the color of the element without rerendering the component
        inputRef.current.style.backgroundColor = "yellow"
    }

    return(
        <>
        <button onClick={handleClick()}>Click Me!</button>
        <input ref={inputRef}/>
        </>
    )
}
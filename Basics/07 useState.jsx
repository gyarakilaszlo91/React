/* 
React hook =    Special function that allows functional components
                to use React features without writing class components
                {useState, useEffect, useContext, useReducer, useCallback, and more}
*/
/* 
useState() =    A React hook that allows the creation of a stateful variable
                AND a setter function to update its value in the Virtual DOM.
                [name, setName] = useState("default")
*/
import React, {useState} from "react"


export default function MyComponent(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = e => {
        setName("Hy my name is, my name is");
    };

    const incrAge = e => {
        setAge(age+1);
    };

    const toggleEmployed = e => {
        setIsEmployed(!isEmployed)
    };


    return(
        <div>
            <p>Name: {name}/</p>
            <button onClick={e => updateName(e)}>Set Name</button>

            <p>Age: {age}/</p>
            <button onClick={e => incrAge(e)}>Set Name</button>

            <p>Employed: {isEmployed ? `Employed` : `Not employed`}/</p>
            <button onClick={e => toggleEmployed(e)}>Toggle Status</button>
        </div>
    );
}
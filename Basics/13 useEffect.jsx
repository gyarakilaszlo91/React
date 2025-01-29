/* 
useEffect() =   React Hook that tells React DO SOME CODE WHEN (pick one):
                This component re-renders
                This component mounts
                Th state of a vlaue
*/

// useEffect(function, [dependancies])

/* 
    1. useEffect(() => {})              // Runs after every re-render
    2. useEffect(() => {}, [])          // Runs only on mount
    3. useEffect(() => {}, [value])     // Runs on mount + when value changes
*/

/* 
    Uses
     #1 Event Listeners
     #2 DOM manipulation
     #3 Subscriptions (real-time updates)
     #4 Fetching Data from an API
     #5 Clean up when a component unmounts
*/

import { useState, useEffect } from "react";

export default function MyComponent(){

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("Event listener added");

        // Cleanup when component dismounts
        return () => {
            window.removeEventListener("resize", handleResize)
            console.log("Event listener removed");
        }
    }, [])

    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height])

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(
        <>
            <p>Window width: {width}</p>
            <p>Window height: {height}</p>
        </>
    )
}
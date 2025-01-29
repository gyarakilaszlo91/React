/* 
useContext() =  React Hook that allows you to share values
                between multiple levels of components
                without passing props through each level
*/

/* 
PROVIDE COMPONENT
    1. import {createContext} from `react`;
    2. export const MyContext = createContext();
    3.  <MyContext.Provider value={value}>
            <Child />
        </MyContext.Provider>
*/

/* 
CONSUMER COMPONENTS
    1. import {useContext} from `react`;
       import {MyContext} from `./contextplace`;
    2. const value = useContext(MyContext);
*/

import { useContext } from "react";
import ComponentA from "./14 ComponentA";

export default function App(){

    return(
        <ComponentA />
    )
}
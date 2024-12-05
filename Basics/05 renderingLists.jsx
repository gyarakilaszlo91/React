
// Converting a list of items into a list with .map()
function List(){

    const fruits = ["apple", "orange", "banana", "coconut", "pineapple"]
    fruits.sort();
    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return(
        <ul>
            {listItems}
        </ul>
    );
}

/* 
Using arrays
*/

function List2(){
   
    const fruits = [{id: 1, name: "apple",     calories: 95},
                    {id: 2, name: "orange",    calories: 45},
                    {id: 3, name: "banana",    calories: 105},
                    {id: 4, name: "coconut",   calories: 159},
                    {id: 5, name: "pineapple", calories:37}
                    ]

// Sorting objects
    // fruits.sort((a, b) => a.name.localeCompare(b.name))      //ALPHABETICAL
    // fruits.sort((a, b) => b.name.localeCompare(a.name))     //REVERSE ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories)         //NUMERIC ORDER
    // fruits.sort((a, b) => b.calories - a.calories)        //REVERSE NUMERIC ORDER

// Creating sub-arrays with filter
    const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);

    const listItems = lowCalFruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp; {fruit.calories}</li>)
    
    return(
        <ul>
            {listItems}
        </ul>
    );
}

/* 
Making the compontent reusable
*/

import PropTypes from "prop-types";

function List3(props){

    const itemList = props.items;
    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; {item.calories}</li>);

    return(
        <ul>
            {listItems}
        </ul>
    );
}

List3.PropTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))
}

List3.defaultProps = {
    items: []
}
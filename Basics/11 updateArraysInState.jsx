import { useState } from "react";

export default function MyComponent(){

    const [foods, setFoods] = useState([])

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(prevFoods => [...prevFoods, newFood])
    }
    function handleRemoveFood(index){
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <h2>List of Food</h2>
            <ul>
                {foods.length > 0 ? foods?.map((food, i) => <li key={i} onClick={i => handleRemoveFood(i)}>{food}</li>) : ""}
            </ul>

            <input type="text" id="foodInput" placeholder="Enter food name" />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}
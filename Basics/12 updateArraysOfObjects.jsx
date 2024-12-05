import { useState } from "react";

export default function MyComponent(){

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        setCars(prevCars => [...prevCars, {year: carYear, make: carMake, model: carModel}])

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")
    }

    function handleRemoveCar(index){
        setCars(prevCars => prevCars.filter((_, i) => i !== index))
    }

    function handleYearChange(event){
        setCarYear(event.target.value)
    }
    function handleMakeChange(event){
        setCarMake(event.target.value)
    }
    function handleModelChange(event){
        setCarModel(event.target.value)
    }

    return(
        <div>
            <h2>List of Car Objects</h2>
            <ul>
                {cars?.map((car,index) => <li key={index} onClick={i => handleRemoveCar(i)} >{car.year} {car.make} {car.model}</li>)}
            </ul>

            <input type="number" value={carYear} onChange={handleYearChange} /><br />
            <input type="text" value={carMake} onChange={handleMakeChange} placeholder="Enter car make" /><br />
            <input type="text" value={carModel} onChange={handleModelChange} placeholder="Enter car model" /><br />

            <button onClick={handleAddCar} >Add car</button>
        </div>
    );
}
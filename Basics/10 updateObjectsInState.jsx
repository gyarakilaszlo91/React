import { useState } from "react";

export default function MyComponent(){

    const [car, setCar] = useState({year: 2024,make: "Ford",model: "Mustang"});

    function handleYearChange(e){
        setCar(prevCar => ({...prevCar, year: e.target.value}));
    }
    function handleMakeChange(e){
        setCar(prevCar => ({...prevCar, make: e.target.value}))
    }
    function handleModelChange(e){
        setCar(prevCar => ({...prevCar, model: e.target.model}))
    }

    return( <div>
                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange} /> <br />
                <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
                <input type="text" value={car.model} onChange={handleModelChange} /> <br />

            </div>
        );
}
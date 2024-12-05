/* 
onChange =  event handler used primarily with form elements
            ex. <input>, <textarea>, <select>, <radio>
            Triggers a functional every time the value of the input changes
*/

import { useState } from "react";

export default function MyComponent(){

    const [name, setName] = useState("Guest")
    const [quantity, setQuantity] = useState(0)
    const [comment, setComment] = useState("")
    const [payment, setPayment] = useState("")
    const [shipping, setShipping] = useState("")

    function handlePaymentChange(e){
        setPayment(e.target.value)
    }

    function handleShippingChange(e){
        setShipping(e.target.value)
    }

    return(<div>
                <input value={name} onChange={e => setName(e.target.value)}/>
                <p>Name: {name}</p>

                <input value={quantity} onChange={e => setQuantity(e.target.value)} type="number"/>
                <p>Quantity: {quantity}</p>

                <textarea value={comment} placeholder="Enter instructions" onChange={e => setComment(e.target.value)}/>

                <select value={payment} onChange={handlePaymentChange}>
                    <option value={""}>Select an option</option>
                    <option value={"visa"}>Visa</option>
                    <option value={"mastercard"}>Mastercard</option>
                    <option value={"giftcard"}>Giftcard</option>
                </select>
                <p>Payment: {payment}</p>

                <label>
                    <input type="radio" value={"pickup"} checked={shipping === "pickup"} onChange={handleShippingChange}/>
                    Pick Up
                </label>
                <br/>
                <label>
                <input type="radio" value={"delivery"} checked={shipping === "delivery"} onChange={handleShippingChange}/>
                    Delivery
                </label>
            </div>);
}
/* 
click event =   An interaction when a user clicks on a specific element.
                We can respond to clicks by passing
                a callback to the onClick event handler.
*/

export default function Button() {

    let count = 0;

    const handleClick = () => {
        if(count < 3){
            count++;
            console.log(`You clicked me ${count} times`)
        }else{
            console.log(`Stop clicking me`)
        }
    }

    const handleClick2 = (name) => {
        `${name} STOP clicking me`
    }

    const handleClick3 = (e) => {
        e.target.textContent = `Ouch 😿`
    }

    return(
        <>
        <button onClick={handleClick}>Click me 😺</button>
        <line />
        <button onClick={() => handleClick2("Bro")}>Click me 😺</button>
        <line />
        <button onClick={(e) => handleClick3(e)}>Click me</button>
        </>

);
}

/* 
In another file
*/

function App(){

    return(<Button />)
}

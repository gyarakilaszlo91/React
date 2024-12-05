// Not including external framework or preprocessors

// Modular styling
import styles from "./02.5 cssStyles.css"
// Importing a css module to this file
// component and css style in a separate, own directory

export default function Button(){

    // Inline CSS styling
    const styles2 = {
        backgroundColor: "hsl(200, 100%, 50%)",
        color: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
    }

    return(
        <>
        <button className={styles.button}>Click me</button>
        <button style={styles2}>Click me</button>
        </>
    );
}

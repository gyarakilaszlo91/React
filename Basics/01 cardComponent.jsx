import "./01.5 cardComponent.css"

export default function Card(){

    return(
        <div className="card">
            <img className="card-image" src="https://via.placeholder.com/150" alt="profile picture"></img>
            <h2 className="card-title">Bro Code</h2>
            <p className="card-text">I make pancakes and play video games</p>
        </div>
    );
}
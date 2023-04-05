import "./Carousel.css"
import landscape from "./pictures/landscape.jpg";
export default function Carousel() {
    return(
        <div className="carousel-container">
        <div className="carousel">
            <div className="carousel-item active">
                <img src={landscape}></img>
            </div>
            <div className="carousel-item">Second</div>
            <div className="carousel-item">Third</div>
        </div>
        <button className="carousel-butt">h</button>
        </div>
    )
}
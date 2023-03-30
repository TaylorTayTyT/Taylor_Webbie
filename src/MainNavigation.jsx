import picOfMe from "./pictures/picOfMe.jpg";
import "./picOfMe.css"
export default function MainNavigation() {
    return (
        <div class = "image-container">
            <div class = "radial-gradient">
                <img class = "picOfMe" src = {picOfMe}></img>
            </div>
        </div>
    )
}
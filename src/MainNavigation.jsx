import picOfMe from "./pictures/picOfMe.jpg";
import "./picOfMe.css"
export default function MainNavigation() {
    const desc = "Hi, I'm Taylor! I'm a front-end developer based in California! Nice to meet you!"
    return (
        <div class = "image-container">
            <div class = "radial-gradient">
                <img class = "picOfMe" src = {picOfMe}></img>
            </div>
            <div className="description">
                <span>
                    <b>Frontend Developer</b><br/>
                    {desc}
                    
                </span>
        </div>
        </div>
    )
}
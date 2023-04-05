import picOfMe from "./pictures/picOfMe.jpg";
import "./picOfMe.css"
import { useState } from "react";
export default function MainNavigation() {
    const intro = (<div>Hi, I'm Taylor! I'm a front-end developer based in California! Nice to meet you!</div>)
    const courses = (<div><b>Courses: </b><br/><br/>Data Structures<br/> Fullstack Javascript <br/> Algorithms <br/> Computer Vision</div>)
    const all_desc = [intro, courses]


    const [description, setDescription] = useState(0)

    const onClick = () => {
        setDescription((description + 1) % all_desc.length)
    }

    return (
        <div class="image-container">
            <div class="radial-gradient">
                <img class="picOfMe" src={picOfMe}></img>
            </div>

            <div className="description">
                <span>
                    <b>Frontend Developer</b><br /><br />
                    {all_desc[description]}<br /><br />
                    <button onClick={onClick} className="material-symbols-outlined">arrow_forward</button>
                </span>
            </div>

        </div>
    )
}
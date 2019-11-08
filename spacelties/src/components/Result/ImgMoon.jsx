import React from "react"
import "./planete.css"

function ImgMoon({planet}) {

    return (
        <div className="moon-container">
            <div className="moon-v">
                <img src={planet.moon1} ></img>
            </div>
            <div className="moon">
                <img src={planet.moon2} ></img>
            </div>
            <div className="moon-v">
                <img src={planet.moon3} ></img>
            </div>
            <div className="moon">
                <img src={planet.moon4} ></img>
            </div>
            <div className="moon">
                <img src={planet.moon5} ></img>
            </div>
        </div>
    )
}

export default ImgMoon
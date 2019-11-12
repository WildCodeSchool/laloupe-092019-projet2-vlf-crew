import React from "react"
import "./planete.css"

function ImgMoon({planet}) {

    return (
        <div className="moon-container">
            <div className="moon-v">
                <img src={planet.moon1} alt="" ></img>
            </div>
            <div className="moon">
                <img src={planet.moon2} alt="" ></img>
            </div>
            <div className="moon-v">
                <img src={planet.moon3} alt="" ></img>
            </div>
            <div className="moon">
                <img src={planet.moon4} alt="" ></img>
            </div>
            <div className="moon">
                <img src={planet.moon5 } alt="" ></img>
            </div>
        </div>
    )
}

export default ImgMoon
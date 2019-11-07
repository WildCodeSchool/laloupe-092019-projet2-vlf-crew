import React from "react"
import "./planete.css"

function ImgPlanet({planet}) {

    return (
        <div>
            <img src={planet.image} alt={planet.color} />
        </div>
    )
}

export default ImgPlanet
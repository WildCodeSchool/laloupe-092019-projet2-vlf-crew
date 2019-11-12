import React from "react";
import "./planete.css";
import PlanetList from './PlanetList';
import Navbar from '../Accueil/navbar/Navbar'



class Planete extends React.Component {
    render() {
        return (

            <div>
                <Navbar />
                <PlanetList />
            </div>

        )
    }
}

export default Planete;
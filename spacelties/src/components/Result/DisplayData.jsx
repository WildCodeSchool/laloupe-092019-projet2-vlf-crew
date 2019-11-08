import React from 'react';
import './planete.css';



function DisplayData({ planetData }) {
    return (
        <div className="more-info">
            <h1> {planetData.pl_name} </h1>
            <ul>
                <li> Host Name: {planetData.pl_hostname} </li>
                <li> Gaya Distance: {planetData.st_dist} pc </li>
                <li> Orbital Period: {planetData.pl_orbper} days </li>
                <li> Stellar informations : {planetData.st_teff} K, {planetData.st_mass} Msun, {planetData.st_rad} Msun  </li>   
            </ul>
        </div>
    );
};

export default DisplayData;
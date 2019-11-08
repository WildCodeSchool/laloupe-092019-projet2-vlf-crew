import React from "react";
import axios from "axios";
import DisplayData from "./DisplayData";
import "./planete.css"


class PlanetData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planetData: null
    };
    this.getPlanetData =this.getPlanetData.bind(this);
  }

  componentDidMount() {
    this.getPlanetData();
  }

  getPlanetData() {   
    let idRandom = Number(Math.floor(Math.random() * 4000));
     axios
      .get("https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,pl_name,st_dist,pl_orbper,st_teff,st_mass,st_rad&order=dec&format=json")
      .then(response => response.data)
      .then(data => {
        this.setState({
          planetData: data[idRandom]
        });
         console.log(this.state.planetData)
      });
  }

  render() {
    return (
      <div>
        {this.state.planetData ? (
          <DisplayData planetData={this.state.planetData} />
        ) : (
          <p> No data </p>
        )}
      </div>
    );
  }
}

export default PlanetData;

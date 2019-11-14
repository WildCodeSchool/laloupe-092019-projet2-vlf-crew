import React from "react";
import ImgPlanet from "./ImgPlanet"
import ImgMoon from "./ImgMoon";
import PlanetData from "./PlanetData"

const imagePlanet = [
    {
        image: "https://apod.nasa.gov/apod/image/1911/M8_Wu_966.jpg",
        color: "blue",
        moon1: "https://pngimage.net/wp-content/uploads/2018/06/plan%C3%A8te-png-3.png",
        moon2: "",
        moon3: "",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1405/Flamessc2014-04a_Med.jpg",
        color: "pink",
        moon1: "https://stickeroid.com/uploads/pic/full-pngmart/thumb/stickeroid_5bf54aebe6804.png",
        moon2: "https://pngimage.net/wp-content/uploads/2018/06/plan%C3%A8te-png-3.png",
        moon3: "",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1910/M42Detailed_DrudisGoldman_8150.jpg",
        color: "red and blue",
        moon1: "https://www.etincelles-astro.fr/wp-content/uploads/2018/06/venus-11022_1280.png",
        moon2: "https://stickeroid.com/uploads/pic/full-pngmart/thumb/stickeroid_5bf54aebe6804.png",
        moon3: "https://pngimage.net/wp-content/uploads/2018/06/plan%C3%A8te-png-3.png",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1910/HorseFlame_Priego_3252.jpg",
        color: "dark and red",
        moon1: "https://i.ya-webdesign.com/images/fantasy-planet-png-7.png",
        moon2: "https://www.etincelles-astro.fr/wp-content/uploads/2018/06/venus-11022_1280.png",
        moon3: "",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1910/M33-Subaru-Gendler-LL.jpg",
        color: "pink",
        moon1: "https://www.etincelles-astro.fr/wp-content/uploads/2018/06/venus-11022_1280.png",
        moon2: "https://i.ya-webdesign.com/images/fantasy-planet-png-7.png",
        moon3: "",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1909/Pelican_Akar_4554.jpg",
        color: "blue",
        moon1: "https://stickeroid.com/uploads/pic/full-pngmart/thumb/stickeroid_5bf54aebe6804.png",
        moon2: "",
        moon3: "",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1909/veilXie.jpg",
        color: "black",
        moon1: "https://i.ya-webdesign.com/images/fantasy-planet-png-7.png",
        moon2: "https://stickeroid.com/uploads/pic/full-pngmart/thumb/stickeroid_5bf54aebe6804.png",
        moon3: "",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1909/longstorm_cassini_977.jpg",
        color: "orange",
        moon1: "https://stickeroid.com/uploads/pic/full-pngmart/thumb/stickeroid_5bf54aebe6804.png",
        moon2: "https://pngimage.net/wp-content/uploads/2018/06/plan%C3%A8te-png-3.png",
        moon3: "https://www.etincelles-astro.fr/wp-content/uploads/2018/06/venus-11022_1280.png",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1909/SpiderFly_Spitzer2Mass_4165.jpg",
        color: "yellow",
        moon1: "",
        moon2: "https://i.ya-webdesign.com/images/fantasy-planet-png-7.png",
        moon3: "https://pngimage.net/wp-content/uploads/2018/06/plan%C3%A8te-png-3.png",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1909/m45_lorenzi_3832.jpg",
        color: "blue",
        moon1: "https://www.etincelles-astro.fr/wp-content/uploads/2018/06/venus-11022_1280.png",
        moon2: "https://pngimage.net/wp-content/uploads/2018/06/plan%C3%A8te-png-3.png",
        moon3: "",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1908/orion2010_spitzer.jpg",
        color: "brown",
        moon1: "https://i.ya-webdesign.com/images/fantasy-planet-png-7.png",
        moon2: "",
        moon3: "",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1908/AntaresRho_McGarvey_2200.jpg",
        color: "golden",
        moon1: "https://stickeroid.com/uploads/pic/full-pngmart/thumb/stickeroid_5bf54aebe6804.png",
        moon2: "https://pngimage.net/wp-content/uploads/2018/06/plan%C3%A8te-png-3.png",
        moon3: "https://i.ya-webdesign.com/images/fantasy-planet-png-7.png",
        moon4: "",
        moon5: "",
    },
    {
        image: "https://apod.nasa.gov/apod/image/1908/NGC1499_mosaic.jpg",
        color: "red",
        moon1: "",
        moon2: "",
        moon3: "",
        moon4: "",
        moon5: "",
    }
];

let plRandom = Number(Math.floor(Math.random() * 13));

function PlanetList() {
    return (

        <article className="earth-demo">
            <div className="earth">
                <PlanetData />
                <ImgPlanet planet={imagePlanet[plRandom]} />
            </div>
            <ImgMoon planet={imagePlanet[plRandom]} />

        </article>
    )
}

export default PlanetList
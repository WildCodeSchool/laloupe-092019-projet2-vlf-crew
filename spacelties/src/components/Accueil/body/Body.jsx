import React from 'react';
import './body.css'
import '../index.css'

class Body extends React.Component {
    render() {
        return (
            <div>
                <div className="cont">
                    <iframe title="video" className="video" src="https://www.youtube.com/embed/d3ZVcvmsh48?autoplay=1&loop=1&controls=0&mute=1"></iframe>
                </div>

                <div className="head column lg-12 md-12 sm-12">

                    <div className="sm-10 div-h1">
                        <h1>
                            Culinary treats from outer space
                        </h1>
                    </div>

                    <div className='div-button lg-12 md-12 sm-12'>
                        <a href="/ChoicePage"><button className="glow-on-hover">Get Started</button></a>
                    </div>

                </div>

                <section className="sec row">

                    <div className="boxes rowr lg-3 md-10 sm-10">
                        <div className="imgbox1 lg-12 md-5 sm-8">
                        </div>
                        <div className="textbox lg-12 md-7 sm-4">
                            <h2>Food :</h2>

                            <span className="column">
                                <p>Wanna treat yourself well with a good meal ? Choose amongst several food specialties and eat the sweetest meats, fishes, vegetables from outer space.</p>
                            </span>
                        </div>
                    </div>

                    <div className="boxes rowm lg-3 md-10 sm-10">
                        <div className="imgbox2 lg-12 md-5 sm-8">
                        </div>
                        <div className="textboxm lg-12 md-7 sm-4">
                            <h2>Drinks :</h2>

                            <span className="column">
                                <p>Wine or liquor lover ? More into cocktails ? Hesitate no more and discover the most complex flavors.</p>
                            </span>
                        </div>
                    </div>

                    <div className="boxes rowr lg-3 md-10 sm-10">
                        <div className="imgbox3 lg-12 md-5 sm-8">
                        </div>
                        <div className="textbox lg-12 md-7 sm-4">
                            <h2>Destination :</h2>
                            <span className="column">
                                <p>Wanna travel to a galaxy or a planet in particular ? Good idea ! Let’s find out what is on the menu !</p>
                            </span>
                        </div>
                    </div>

                </section>
            </div>
        )
    }
}

export default Body; 
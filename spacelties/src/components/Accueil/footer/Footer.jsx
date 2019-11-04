import React from 'react';
import '../index.css'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer row lg-12 md-12 sm-12">

                <div className="link lg-4 md-4 sm-12">
                    <a href="/About">About us</a>
                    <a href="/Form">Contact us</a>
                </div>

                <div className="logos-sociaux lg-4 md-4 sm-12">
                    <div>
                        <a href="/Facebook"><img src="https://i.imgur.com/rARGmDK.png" alt="facebook_link" /></a>
                    </div>
                    <div>
                        <a href="/Easy"><img src="https://i.imgur.com/upmtJle.png" alt="easy_logo" /></a>
                        <a href="/Future"><img src="https://i.imgur.com/EAtgUo3.png" alt="future_logo" /></a>
                        <a href="/Snakes"><img src="https://i.imgur.com/HVpx8yf.png" alt="snakes_logo" /></a>
                    </div>
                    <div>
                        <a href="/Trajetoria"><img src="https://i.imgur.com/Dce34lP.png" alt="trajectoria_logo" /></a>
                    </div>
                </div>

                <div className="link lg-4 md-4 sm-12">
                    <a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees">Privacy policy</a>
                    <a href="https://wireframepro.mockflow.com/view/Ma9a887ccd95fde904e4d4a3afde8059e1571129538939#/page/9ccc61562a394bce85c608c85a6d5a4b">Customer Support</a>
                </div>

            </footer>
        )
    }
}

export default Footer; 
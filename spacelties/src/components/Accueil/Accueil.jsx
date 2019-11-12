import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import Body from './body/Body';

class Accueil extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Body />
                <Footer />
            </div>
        )
    }
}

export default Accueil; 
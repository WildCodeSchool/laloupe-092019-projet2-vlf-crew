import React from 'react';
import Body from './body/Body'
import Navbar from '../Accueil/navbar/Navbar';
import Footer from '../Accueil/footer/Footer';

class ChoicePage extends React.Component {
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

export default ChoicePage;
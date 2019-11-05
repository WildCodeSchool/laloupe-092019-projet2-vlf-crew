import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './links.css';
import '../index.css';

class About extends React.Component {
    render() {
        return (
            <div class="afoot lg-12 md-12 sm-12">
                <Navbar />
                <a href="/"><img src="../logo.png" alt="trajetoria_link" class="row lg-12 md-12 sm-12" /></a>
                <form class="row lg-12 md-12 sm-12" action="wait">
                    <h1 class="row lg-12 md-12 sm-12">And now,</h1>
                    <h3 class="row lg-12 md-12 sm-12">Speak about-you for your customers</h3>
                </form>
                <Footer />
            </div>
        )
    }
}

export default About;
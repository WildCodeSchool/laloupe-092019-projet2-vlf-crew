import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import './links.css';
import '../index.css';

class Form extends React.Component {
    render() {
        return (
            <div class="afoot lg-12 md-12 sm-12">
                <Navbar />
                <img src="../logo.png" alt="easy_link" class="row lg-12 md-12 sm-12" />

                <form action="contact" class="row lg-12 md-12 sm-12 formulaire">
                    <h2 id="contact" class="lg-12 md-12 sm-12">Contact Us</h2>
                    <div class="lg-12 md-12 sm-12">
                        <label for="email" class="email">Your email :</label>
                        <input type="email" required id="email" name="email" placeholder="your@email.com" />
                    </div>
                    <div class="lg-12 md-12 sm-12">
                        <label for="message" class="message">Your message :</label><br />
                        <textarea name="text" class="lg-9 md-10 sm-11" id="message" cols="30" rows="10" placeholder="text"></textarea>
                    </div>
                    <div class="lg-12 md-12 sm-12">
                        <button type="submit" class="send-btn lg-12 md-12 sm-12">Send</button>
                    </div>
                </form>
                <Footer />

            </div>
        )
    }
}

export default Form; 
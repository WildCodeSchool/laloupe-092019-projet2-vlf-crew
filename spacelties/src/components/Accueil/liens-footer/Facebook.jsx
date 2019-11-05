import React from 'react';
import './links.css';
import '../index.css';

class Facebook extends React.Component {
    render() {
        return (
            <div class="afoot lg-12 md-12 sm-12">

                <img src="https://i.imgur.com/rARGmDK.png" alt="facebook_link" class="row lg-12 md-12 sm-12" />
                <form action="contact" class="row lg-12 md-12 sm-12">
                    <div class="lg-5 md-12 sm-12">
                        <label for="email" class="email">Your email : </label>
                        <input type="email" required id="email" name="email" placeholder="your@email.com" />
                    </div>
                    <div class="lg-5 md-12 sm-12">
                        <label for="password" class="password">Your password : </label><br />
                        <input type="password" required id="password" name="password" placeholder="Your password" />
                    </div>
                    <div class="lg-2 md-12 sm-12"><button type="submit">Connexion</button></div>
                </form>

            </div>
        )
    }
}

export default Facebook; 
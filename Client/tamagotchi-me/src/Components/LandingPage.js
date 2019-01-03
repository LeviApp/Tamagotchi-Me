import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../Images/logo.svg'

import './LandingPage.scss'

class LandingPage extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="logo-group">
                <Logo className="logo" />
                <div className="logo-text">
                <h1>TamagotchiMe!</h1>
                <p>Keep track of your healthy lifestyle. Keep Tamagotchi happy to earn prizes.</p>
                </div>
                </div>
                <Link to='/Register'> <p>Don't have an account? Register Here</p> </Link>
                <Link to='/Login'> <p>Already registered? Login Here</p> </Link>
                <img src={require('../Images/blondepinkhappy.png')} />
                
            </div>
        );
    }
}
export default LandingPage;


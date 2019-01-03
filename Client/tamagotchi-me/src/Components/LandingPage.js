import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../Images/logohead.svg'

import './LandingPage.scss'

class LandingPage extends Component {
    render() {
        return (
            <div className="app-container">
                <div className="logo-group">
                <Logo className="logohead" />
                <h1>TamagotchiMe!</h1>
                <p>Keep track of your healthy lifestyle. Keep Tamagotchi happy to earn prizes.</p>
                </div>
                <div className='mainoptions'>

                <div className='option'>
                <span>Already registered?</span>
                <Link className='login' to='/Login'>Login Here</Link>
                </div>

                <div className='option'>
                <span>Don't have an account?</span>
                <Link className='register' to='/Register'>Register Here</Link>
                </div>
                </div>
                
            </div>
        );
    }
}
export default LandingPage;


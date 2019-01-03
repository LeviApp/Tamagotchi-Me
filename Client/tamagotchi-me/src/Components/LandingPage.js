import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LandingPage extends Component {
    render() {
        return (
            <div className="app-container">
                <p>TamagotchiMe!</p>
                <Link to='/Register'> <p>Don't have an account? Register Here</p> </Link>
                <Link to='/Login'> <p>Already registered? Login Here</p> </Link>
                <img src={require('../Images/blondepinkhappy.png')} />
            </div>
        );
    }
}
export default LandingPage;
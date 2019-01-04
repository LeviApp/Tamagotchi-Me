import React, { Component } from 'react';
import axios from 'axios';

import '../Images/overeating.svg';

class TamagotchiMe extends Component {
    state = {
        dailyCalories: '',
        caloriesRemaining: 1200,
        foodState: ''
    }
    
    componentDidMount() {
        let key = 'Token ' + localStorage.getItem('key')
        const herokuUrl = ''
        const localPort = `localhost:3000`;
        axios.get(`${localPort}/`, {
            headers: {
                "Authorization": key
            }
        })
            .then(response => {
                this.setState({
                    dailyCalories: response.data.calories,
                    name: response.data.name,
                })
                console.log(this.state);
            })
            .catch(error => {
                console.log(error.response)
            })
    }
    render() {
        return (
            <div className="app-container">
                <p>TamagotchiMe</p>

                {this.state.foodState === 'neutral'
                    ? [
                        <img src='' />
                    ]
                    : null
                }
                {this.state.foodState === 'underate' 
                    ? [
                        <img src='' />
                    ]
                    : null
                }
                {this.state.foodState === 'overate'
                    ? [
                        <img src='' />
                    ]
                    : null
                }

                <p>Your tamagotchi can still eat {this.state.caloriesRemaining} calories today. Feed it well!</p>
            </div>
        );
    }
}
export default TamagotchiMe;
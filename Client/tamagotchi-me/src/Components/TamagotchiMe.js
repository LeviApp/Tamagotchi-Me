import React, { Component } from 'react';
import axios from 'axios';

import overeating from '../Images/overeating.svg';
import undereating from '../skinny.svg';
import neutral from '../normal.svg';

class TamagotchiMe extends Component {
    state = {
        dailyCalories: '',
        caloriesRemaining: 1200,
        foodState: 'neutral'
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

                <p>Your tamagotchi can still eat {this.state.caloriesRemaining} calories today. Feed it well!</p>

            {this.state.foodState === 'neutral'
                ? [
                    <img src={neutral} />
                ]
                : null
            }
            {this.state.foodState === 'underate' 
                ? [
                    <img src={undereating} />
                ]
                : null
            }
            {this.state.foodState === 'overate'
                ? [
                    <img src={overeating} />
                ]
                : null
            }
            </div>
        );
    }
}
export default TamagotchiMe;
import React, { Component } from 'react';
import axios from 'axios';

class TamagotchiMe extends Component {
    state = {
        dailyCalories: '',
        caloriesRemaining: 1200,

    }
    componentDidMount() {
        let key = 'Token ' + localStorage.getItem('key')
        const herokuUrl = ''
        axios.get(`${herokuUrl}/`, {
            headers: {
                "Authorization": key
            }
        })
            .then(response => {
                this.setState({
                    dailyCalories: response.data.calories,
                    name: response.data.name,
                })
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
            </div>
        );
    }
}
export default TamagotchiMe;
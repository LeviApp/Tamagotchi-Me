import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Edit.css';

class Edit extends Component {
    state = {
        age: '',
        gender: '',
        weight: '',
        height: '',
        activityLevel: 1,
        accountCreated: true,
        response: {
            status: 201,
            content: {}
        }
    }
    inputChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };
    activityLevelChangeHandler = event => {
        this.setState({ activityLevel: event.target.value })
    };
    submitHandler = event => {
        event.preventDefault();
        //const local = 'http://127.0.0.1:8000'
        const herokuUrl = '';
        axios.post(`${herokuUrl}/api/edit`, this.state)
            .then(res => {
                console.log(res.data);
                const token = res.data.key;
                localStorage.setItem('key', token);
                this.setState({
                    accountCreated: true,
                    response: { status: 201, content: {} }
                })
            })
            .catch(err => {
                const error = {
                    status: err.response.status,
                    content: err.response.data
                }
                this.setState({
                    response: error
                })
            });
        console.log('state', this.state);
        this.props.history.push('/tamagotchime');
    };
    render() {
        return (
            <div className="edit-container">
                <form className='edit-form' onSubmit={this.submitHandler.bind(this)}>
                    <h1>Edit Information</h1>
                    <div>
                        <p>Age</p>
                        <input
                            value={this.state.age}
                            onChange={this.inputChangeHandler}
                            placeholder="Age"
                            type="text"
                            name="age" />
                    </div>
                    <div>
                        <p>Weight in kilograms</p>
                        <input
                            value={this.state.weight}
                            onChange={this.inputChangeHandler}
                            placeholder="Weight"
                            type="text"
                            name="weight" />
                    </div>
                    <div>
                        <p>Height in Centimeters</p>
                        <input
                            value={this.state.height}
                            onChange={this.inputChangeHandler}
                            placeholder="Height"
                            type="text"
                            name="height" />
                    </div>
                    <div>
                        <p>Activity Level</p>
                        <select value={this.state.activityLevel} onChange={this.activityLevelChangeHandler}>
                            <option value="1">Sedentary</option>
                            <option value="2">Lightly Active</option>
                            <option value="3">Active</option>
                            <option value="4">Very Active</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">
                            Edit your Tamagotchi
                        </button>
                    </div>
                    <div> {this.state.response.content.error}</div>
                    {this.state.accountCreated ? <div><Link to="/TamagotchiMe"> Create your Tamagotchi</Link></div> : null}
                </form>
            </div>
        );
    }
}
export default Edit; 
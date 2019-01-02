import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.css';

class Register extends Component {
    state = {
        username: '',
        password1: '',
        password2: '',
        age: '',
        gender: '',
        weight: '',
        height: '',
        activityLevel: 1,
        accountCreated: false,
        response: {
            status: 201,
            content: {}
        }
    }
    inputChangeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    };
    activityLevelChangeHandler = event => {
        this.setState({ activityLevel: event.target.value})
    };
    submitHandler = event => {
        event.preventDefault();
        //const local = 'http://127.0.0.1:8000'
        const herokuUrl = '';
        axios.post(`${herokuUrl}/api/registration`, this.state)
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
    };
    render() {
        return (
            <div className="register-container">
                <form className='register-form' onSubmit={this.submitHandler}>
                    <h1>Register</h1>
                    <div>
                        <p>Username</p>
                        <input
                            value={this.state.username}
                            onChange={this.inputChangeHandler}
                            placeholder="Username"
                            type="text"
                            name="username" />
                    </div>
                    <div>
                        <p>Password</p>
                        <input
                            value={this.state.password1}
                            onChange={this.inputChangeHandler}
                            placeholder="Password"
                            type="password"
                            name="password1" />
                    </div>
                    <div>
                        <p>Confirm Password</p>
                        <input
                            value={this.state.password2}
                            onChange={this.inputChangeHandler}
                            placeholder="Password"
                            type="password"
                            name="password2" />
                    </div>
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
                            <option value="2" >Lightly Active</option>
                            <option value="3" >Active</option>
                            <option value="4">Very Active</option>
                        </select>
                    </div>
                    <div>
                        <button type="submit">
                            Create your Tamagotchi
                        </button>
                    </div>
                    <Link to='/login'><a>Account already created? Login Here</a></Link>
                    <div> {this.state.response.content.error}</div>
                    {this.state.accountCreated ? <div><Link to="/TamagotchiMe"> Create your Tamagotchi</Link></div> : null}

                </form>
            </div>
        );
    }
}
export default Register; 
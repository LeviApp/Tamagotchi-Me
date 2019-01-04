import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Register.scss';
import {ReactComponent as Logo} from '../Images/logohead.svg'

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
        this.props.history.push('/TamagatchiMe');
    };
    render() {
        return (
            <div className="register-container">

             <div className="logo-header">
                <Logo className="logohead"/>
                <h1>Register</h1>
            </div>

                <form className='register-form' onSubmit={this.submitHandler.bind(this)}>
                    <div className='register-info'>
                        <p className='register-text'>Username</p>
                        <input
                            value={this.state.username}
                            onChange={this.inputChangeHandler}
                            placeholder="Username"
                            type="text"
                            name="username" />
                    </div>
                    <div className='register-info'>
                        <p className='register-text'>Password</p>
                        <input
                            value={this.state.password1}
                            onChange={this.inputChangeHandler}
                            placeholder="Password"
                            type="password"
                            name="password1" />
                    </div>
                    <div className='register-info'>
                        <p className='register-text'>Confirm Password</p>
                        <input
                            value={this.state.password2}
                            onChange={this.inputChangeHandler}
                            placeholder="Password"
                            type="password"
                            name="password2" />
                    </div>
                    <div className='register-info'>
                        <p className='register-text'>Age</p>
                        <input
                            value={this.state.age}
                            onChange={this.inputChangeHandler}
                            placeholder="Age"
                            type="text"
                            name="age" />
                    </div>
                    <div className='register-info'>
                        <p className='register-text'>Weight in kilograms</p>
                        <input
                            value={this.state.weight}
                            onChange={this.inputChangeHandler}
                            placeholder="Weight"
                            type="text"
                            name="weight" />
                    </div>
                    <div className='register-info'>
                        <p className='register-text'>Height in Centimeters</p>
                        <input
                            value={this.state.height}
                            onChange={this.inputChangeHandler}
                            placeholder="Height"
                            type="text"
                            name="height" />
                    </div>
                    <div className='register-info'>
                        <p className='register-text'>Activity Level</p>
                        <select value={this.state.activityLevel} onChange={this.activityLevelChangeHandler}>
                            <option value="1">Sedentary</option>
                            <option value="2" >Lightly Active</option>
                            <option value="3" >Active</option>
                            <option value="4">Very Active</option>
                        </select>
                    </div>
                    <Link className="sign-in" to='/TamagotchiMe'>Create your Tamagotchi</Link>
                    <div> {this.state.response.content.error}</div>
                </form>
            </div>
        );
    }
}
export default Register; 


import React, { Component, useState } from 'react';
import {Parallax} from 'react-scroll-parallax';
import {Row, Col} from "reactstrap";
import "./Style/Components.css";
import Auth from '../utils/auth'
// import "./Style/Login.css";

import { validateEmail } from '../utils/helpers';
import { LOGIN_USER } from '../utils/mutations';
import { useMutation } from "@apollo/client"



function Home() {

    // function Login() {

        const [formState, setFormState] = useState({ email: '', password: '' });
      
        const [errorMessage, setErrorMessage] = useState('');
      
        const { email, password } = formState;
      
        const [signIn] = useMutation(LOGIN_USER)
      
        function handleChange(e) {
            if (e.target.name === 'email') {
              const isValid = validateEmail(e.target.value);
        
              if (!isValid) {
                setErrorMessage('Please enter a valid email in order to continue');
              } else {
                setErrorMessage('');
              }
        
            } else {
              if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required!`);
              } else {
                setErrorMessage('');
              }
            }
        
            if (!errorMessage) {
              setFormState({ ...formState, [e.target.name]: e.target.value })
            }
          }
        
          const handleSubmit= async(e)=> {
            e.preventDefault();
            console.log(formState)
            try {
              
              const response = await signIn({variables: {...formState}});
              console.log(response)
            //   if (!response.ok) {
            //     throw new Error('something went wrong!');
            //   }
              Auth.login(response.data.login.token)
              window.location.href = "/";
            } catch (err) {
              console.error(err);
            }
          }
           
  
    
  return (

      <div bgImage={require("./Style/lobby2.jpg")}>
          <div style={{ height: 1000 }}>


          <form onSubmit={handleSubmit} class="container" id="loginContainer">
                <h3>Login</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" id="email_input" defaultValue={email} onChange={handleChange} required></input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" id="password_input" defaultValue={password} onChange={handleChange} required></input>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Log in!</button>
                <p className="forgot-password text-right">
                </p>
            </form>

              
          </div>
    </div>
  )
}

export default (Home);
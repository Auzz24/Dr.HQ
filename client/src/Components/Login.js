

import React, { Component, useState } from 'react';
import {Parallax} from 'react-scroll-parallax';
import {Row, Col} from "reactstrap";
import "./Style/Components.css";

import { validateEmail } from '../utils/helpers';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from "@apollo/client"



function Home() {

    // function Login() {

        const [formState, setFormState] = useState({ firstName: '', lastName: '', email: '', password: '' });
      
        const [errorMessage, setErrorMessage] = useState('');
      
        const { firstName, lastName, email, password } = formState;
      
        const [addUser] = useMutation(ADD_USER)
      
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
              
              const response = await addUser({variables: {...formState}});
              console.log(response)
              if (!response.ok) {
                throw new Error('something went wrong!');
              }
            } catch (err) {
              console.error(err);
            }
          }
           
  
    
  return (

      <div bgImage={require("./Style/lobby2.jpg")}>
          <div style={{ height: 1000 }}>


          <form onSubmit={handleSubmit} class="container">
                <h3>Login</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" name="firstName" id="name_input" defaultValue={firstName} onChange={handleChange} required></input>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" name="lastName" id="name_input" defaultValue={lastName} onChange={handleChange} required></input>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" name="email" id="email_input" defaultValue={email} onChange={handleChange} required></input>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" id="password_input" defaultValue={password} onChange={handleChange} required></input>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                <p className="forgot-password text-right">
                    
                    Already registered <a href="#">log in?</a>
                </p>
            </form>

              
          </div>
    </div>
  )
}

export default (Home);
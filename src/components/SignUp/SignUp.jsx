import React, { Component } from 'react';

import Input from '../shared/InputField';
import Form from '../shared/Form'
import {postUser} from '../../db/localStorage.js'


export default class SignUp extends Component{

  state = {
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  }

  handleChenge = ({target}) => {
    const {name, value} = target;
    this.setState({
      [name]: value
    })
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {name, email, password} = this.state
    const newUser = {name, email, password}
    const user = postUser(newUser)
    this.props.onSuccess(user)
  }


  render(){
    const {name, email, password, passwordRepeat} = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Input 
          name="name" value={name} title='Name'
          onChange={this.handleChenge}/>

        <Input 
          name="email" type='email'value={email} title='E-mail'
          onChange={this.handleChenge}/>

        <Input 
          name="password" type='password' value={password} title='Password'
          onChange={this.handleChenge}/>
        
        <Input 
          name="passwordRepeat" type='password' value={passwordRepeat} title='Repeat psssword' 
          onChange={this.handleChenge}/>
      </Form>
    )
  }
}





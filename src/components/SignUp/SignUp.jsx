import React, { Component } from 'react';

import Input from '../shared/InputField';
import Form from '../shared/Form'

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
    const res = {...this.state};

    
    console.log(res);
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





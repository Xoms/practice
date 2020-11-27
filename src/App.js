import React, { Component}  from 'react'
import './App.css';

import Header from './components/Header';
import Container from './components/shared/Container/Container';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';
import { getUser } from './db/localStorage';


// const users = [
//   {
//     name: 'Ivan Pupkin',
//     email: 'john@mail.ru',
//     password: '1',
//     passwordRepeat: '1'
//   },
//   {
//     name: 'Gadya stark',
//     email: 'arya@mail.ru',
//     password: '2',
//     passwordRepeat: '2'
//   }
// ]


export default class App extends Component {

  state = {
    login: true,
    isAuth: false,
  }

  componentDidMount() {
    
    const users =  localStorage.getItem('Users')
    if (!users) {
      localStorage.setItem("Users", JSON.stringify(this.state.users))
    } 

  }

  loginUser = ()=>{
    this.setState({login: true})
  }

  SignUpUser = ()=> {
    this.setState({login: false})
  }

  onLogOut = () => {
    this.setState({isAuth: false})
  }

  onLoginSuccess = (user) => {
    console.log(user);
    this.setState({ user, isAuth: true })
  }

  render() {

    const {login, isAuth, user }=this.state
    console.log(user);
    return (
        <>
        <Header
          isAuth={isAuth}
          onLogin={this.loginUser}
          onSignUp={this.SignUpUser}
          onLogOut={this.onLogOut}
          name={!!user && user.name}
        />
        <Container>
          {login ? <SignIn onSuccess={this.onLoginSuccess}/> :  <SignUp onSuccess={this.onLoginSuccess}/>}           
          </Container>
        </>
      );
  }

}


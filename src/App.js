import React  from 'react'
import './App.css';

import Header from './components/Header';
import Container from './components/shared/Container/Container';
import SignUp from './components/SignUp/SignUp';
import SignIn from './components/SignIn/SignIn';

const users = [
  {
    name: 'john snow',
    email: 'john@mail.ru',
    password: '1',
    passwordRepeat: '1'
  },
  {
    name: 'arya stark',
    email: 'arya@mail.ru',
    password: '2',
    passwordRepeat: '2'
  }
]
function App() {
  return (
    <>
      <Header />
      <Container>
        <SignUp />
        <SignIn users = {users}/>
      </Container>
    </>
  );
}

export default App;

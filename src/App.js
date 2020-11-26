import React  from 'react'
import './App.css';

import Header from './components/Header';
import Container from './components/shared/Container/Container';
import SignUp from './components/SignUp/SignUp';

const users = [
  {
    name: '',
    email: '',
    password: '',
    passwordRepeat: ''
  }
]
function App() {
  return (
    <>
      <Header />
      <Container>
        <SignUp />
      </Container>
    </>
  );
}

export default App;

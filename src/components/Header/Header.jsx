import React from 'react';
import Controls from '../shared/Wrapper';
import Button from '../shared/Button';
import Auth from '../Auth/Auth.jsx';
import PropTypes from 'prop-types';


const Header = (props) => {

  const { isAuth, onLogin, onSignUp, onLogOut, name } = props
  
  return (
    <header>
      <Controls>
        {
          isAuth ?
          <Auth name={name} onLogOut={onLogOut}/> :
          <>
            <Button caption="Login" onClick={onLogin} />
            <Button caption="SignUp" onClick={onSignUp} />
          </>
        }
    </Controls>


    </header>
  )
  
};

Header.propTypes = {
  isAuth: PropTypes.bool,
  onLogin: PropTypes.func,
  onSignUp: PropTypes.func,
  onLogOut: PropTypes.func,
}


export default Header;

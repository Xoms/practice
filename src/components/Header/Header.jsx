import React from 'react';

import Controls from '../shared/Wrapper';
import Button from '../shared/Button';



const Header = (props) => (
  <header>
    <Controls>
      <Button caption="Login" /> 
      <Button caption="SignUp" />
    </Controls>


  </header>
);



export default Header;

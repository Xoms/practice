import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button';


const Form = ({title, children, onSubmit}) => {
  
  return(
    <form onSubmit={onSubmit}>
      {!!title && <h2>{title}</h2>}
      {children}
      <Button type="submit" caption="SignUp"/>
    </form>
  )
};

Form.propTypes = {
  title: PropTypes.string
};

Form.defaultProps = {
  title: ''
};

export default Form;

import React from 'react';
import PropTypes from 'prop-types';
import './'

const Button = ({type, caption, onClick}) => (
 <button type={type} className="btn btn-submit" onClick={onClick}> {caption} </button>
);

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: 'button',
  onClick: ()=>{},
};

export default Button;

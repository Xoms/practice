import React from 'react';
import PropTypes from 'prop-types';
import './'

const Button = ({type, caption}) => (
 <button type={type} className="btn btn-submit"> {caption} </button>
);

Button.propTypes = {
  caption: PropTypes.string.isRequired,
  type: PropTypes.string
};

Button.defaultProps = {
  type: 'button',
};

export default Button;

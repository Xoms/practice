import React from 'react';
import PropTypes from 'prop-types';

const InputField = (props) => {
  const {title, type, name, value, onChange} = props;
  return (  
    <label> {title}
      <input type={type} name={name} value={value} onChange={onChange}></input>
    </label>
  )
};

InputField.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

InputField.defaultProps = {
  type: 'text'
}
export default InputField;

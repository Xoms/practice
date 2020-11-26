import React, { Component } from "react"
import PropTypes from "prop-types"
import Input from "../shared/InputField"
import Form from "../shared/Form"

class SignIn extends Component {

  constructor(props){
this.props = props;
  }

  state = {
    email: '',
    password: ''
  }

  handleChange=({target})=>{
    const {name, value} = target;
    this.setState({
      [name]:value,
    })
  }
  
handleSubmit=(event)=>{
  event.preventDefault();
 console.log(this.props); 

}



  render() {
    return (
      <Form title = "Sign In" onSubmit = {this.handleSubmit}>
        <Input title = "Email" type = "email" name = "email" value={this.state.email} onChange = {this.handleChange}/>
        <Input title = "Password" type = "password" name="password" value={this.state.password} onChange  = {this.handleChange}/>
      </Form>
    )
  }
}

// const SignIn = (props) => (
//   <div className="SignInWrapper">
//     Test content
//   </div>
// );

SignIn.propTypes = {
  // bla: PropTypes.string,
}

SignIn.defaultProps = {
  // bla: 'test',
}

export default SignIn

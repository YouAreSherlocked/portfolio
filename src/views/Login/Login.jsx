import React, { Component } from 'react';

class Login extends Component {

handleChange(e) {
  this.props.checkAuth(e.target.value);
}

  render() {
    return (
      <section id="login">
        <input type="text" name="login" id="login" placeholder="enter code" onChange={(e) => this.handleChange(e)}></input>
      </section>
    );
  }
}

export default Login;
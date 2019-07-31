import React, { Component } from 'react';

class Login extends Component {

handleChange(e) {
  this.props.checkAuth(e.target.value);
}

  render() {
    return (
      <section id="login">
        <form>
          <input type="password" name="login" id="login" placeholder="enter code" onChange={(e) => this.handleChange(e)}></input>
        </form>
      </section>
    );
  }
}

export default Login;
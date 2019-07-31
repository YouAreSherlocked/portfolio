import React, { Component } from 'react';

class Info extends Component {

  render() {
    return (
      <div id="info">
        <div className="profile-img"></div>
        <div>
          <p><b>Timo Mayer</b></p>
          <p>16.07.1996</p>
          <p>timo.mayer@swisscom.com</p>
          <p>079 250 66 05</p>
        </div>
      </div>
    );
  }
}

export default Info;
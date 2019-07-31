import React, { Component } from 'react';
import AppRouter from './AppRouter';
import '../css/index.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sections: []
    };
  }
  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ sections: res.sections }))
      .catch(err => console.log(err));
  }

  callBackendAPI = async () => {
    const response = await fetch('sections');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      <React.Fragment>
        <AppRouter />
      </React.Fragment>
    );
  }
}

export default App;

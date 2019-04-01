import React, { Component } from 'react';
import AppRouter from './AppRouter';
import '../css/index.css';
import Header from './Header/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    //this.props.history.push(`/`);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <AppRouter />
      </React.Fragment>
    );
  }
}

export default App;

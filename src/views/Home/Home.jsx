import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { operations, selectors } from '../../redux';
import '../../css/index.css';
import Hud from '../Hud/Hud';
import Welcome from '../welcome/Welcome';
import Work from '../Work/Work';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }
  }

  async componentDidMount() {
    console.log("1")
    this.setState({isLoading: true});
    await this.props.initState();
    console.log("2")
    this.setState({isLoading: false});
  }

  render() {
    console.log("3")

    return (
      this.state.isLoading ? 
        <div>Loading Data :)</div>
      :
        <React.Fragment>
          <Hud switchMode={this.props.switchMode} sections={this.props.sections} dark={this.props.dark}/>
          <Welcome />
          <div className='intro'>
            <h2>Opening</h2>
            <p className='intro-text'>Lorem Ipsum Lorem Ipsum Lore Ipsum Lorem Ipsum</p>
          </div>
          <Work sections={this.props.sections} projects={this.props.projects}/>
        </React.Fragment>
    );
  };
}

const mapStateToProps = state => ({
  dark: selectors.getMode(state.mainState),
  sections: selectors.getSections(state.mainState),
  projects: selectors.getProjects(state.mainState)
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    initState: operations.initState,
    switchMode: operations.switchMode
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
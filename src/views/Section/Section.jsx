import React, { Component } from 'react';
//import propTypes from 'prop-types';
//import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import '../../css/index.css';

class Section extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sectionNames: ['Graphic Design', 'Illustrations', 'Photography', 'Programming']
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const x = this.props.hhgghh;
    console.log('->' + x);
    //this.setState({sectionNames: {x}})
  }

  handleClick() {
    console.log('etetet')
  }

  createGallery(sec) {
    let imgs = [];
    console.log(this.state.sectionNames[1])
    switch(sec) {
      case this.state.sectionNames[0]:
        imgs = this.importAll(require.context('../../img/Graphic Design/', false, /\.(png|jpe?g|svg)$/));
        break;
      case this.state.sectionNames[1]:
        imgs = this.importAll(require.context('../../img/Illustrations/', false, /\.(png|jpe?g|svg)$/));
        break;
      case this.state.sectionNames[2]:
        imgs = this.importAll(require.context('../../img/Photography/', false, /\.(png|jpe?g|svg)$/));
        break;
      case this.state.sectionNames[3]:
        imgs = this.importAll(require.context('../../img/Illustrations/', false, /\.(png|jpe?g|svg)$/));
        break;
      default:
        
    }

    let images = [];
    for (var i = 0; i < imgs.length; i++) {
      images.push(<div key={i}><img alt='work' src={imgs[i]} onClick={this.handleClick}/></div>);
    }
    return images;
  }

  importAll(r) {
    return r.keys().map(r);
  }
  

  render() {
    const { sectionNames } = this.state;
    const sections = sectionNames.map(section => {
      return (
        <div key={section} className='section' id={section}>
          <h3>{section}</h3>
          <div className='gallery'>
            {this.createGallery(section)}
          </div>
        </div>
      )
    });
    console.log('sections');
    console.log(sections);
    return (
      <div className='content'>
        {sections}
      </div>
    );
  };
}

export default withRouter(Section);
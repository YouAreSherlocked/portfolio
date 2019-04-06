import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/index.css';

class Work extends Component {
  createGallery(sec) {
    let imgs = [];
    switch(sec) {
      case this.props.sections[0]:
        imgs = this.importAll(require.context('../../assets/img/Graphic Design/', false, /\.(png|jpe?g|svg)$/));
        break;
      case this.props.sections[1]:
        imgs = this.importAll(require.context('../../assets/img/Illustrations/', false, /\.(png|jpe?g|svg)$/));
        break;
      case this.props.sections[2]:
        imgs = this.importAll(require.context('../../assets/img/Photography/', false, /\.(png|jpe?g|svg)$/));
        break;
      case this.props.sections[3]:
        imgs = this.importAll(require.context('../../assets/img/Illustrations/', false, /\.(png|jpe?g|svg)$/));
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
    const sections = this.props.sections.map(section => {
      return (
        <div key={section} className='section' id={section}>
          <h3>{section}</h3>
          <div className='work-gallery'>
            {this.createGallery(section)}
          </div>
        </div>
      )
    });
    return (
      <section id='work'>
        {sections}
      </section>
    );
  };
}

const mapStateToProps = state => ({
  sections: state.state.sections
});

export default connect(mapStateToProps)(Work);
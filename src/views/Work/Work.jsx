import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/index.css';
import WorkSection from '../WorkSection/WorkSection';

class Work extends Component {
  getProjects() {
    const projects = [
      {title: "test"},
      {title: "test"},
      {title: "test"},
      {title: "test"},
      {title: "test"},
      {title: "test"}
    ]
    return(
      projects
    );
  }

  render() {
    const sections = this.props.sections.map(section => (
      <WorkSection 
        title={section} 
        id={section} 
        key={section} 
        projects={this.getProjects()}>
      </WorkSection>
    ));
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
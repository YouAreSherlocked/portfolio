import React, { Component } from 'react';
import '../../css/index.css';
import WorkSection from '../WorkSection/WorkSection';

class Work extends Component {
  render() {
    const sections = this.props.workSections.map(section => (
      <WorkSection 
        title={section} 
        id={section} 
        key={section} 
        projects={this.props.projects}>
      </WorkSection>
    ));
    return (
      <section id='work'>
        {sections}
      </section>
    );
  };
}

export default Work;
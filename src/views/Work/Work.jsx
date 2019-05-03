import React, { Component } from 'react';
import '../../css/index.css';
import WorkSection from '../WorkSection/WorkSection';

class Work extends Component {
  render() {
    console.log(this.props)
    const sections = this.props.sections.map(section => (
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
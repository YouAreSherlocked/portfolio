import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/index.css';
import WorkSection from '../WorkSection/WorkSection';
import { getProjects } from '../../redux/services/fetchWorks';

class Work extends Component {
  getProjects() {
    const projects = [
      {
        id: 0,
        title: "test1",
        description: "Description of test1"
      },
      {
        id: 1,
        title: "test"
      },
      {
        id: 2,
        title: "test"
      },
      {
        id: 3,
        title: "test"
      },
      {
        id: 4,
        title: "test"
      },
      {
        id: 5,
        title: "test"
      }
    ]
    return(
      projects
    );
  }

  render() {
    console.log(getProjects)
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
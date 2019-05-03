import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/index.css';
import { getSkills } from '../../redux/services/fetchWorks';

class Skills extends Component {
  render() {
    const skills = this.props.skills.map(skill => (
      <div className="skill"></div>
    ));
    return (
      <section id='skills'>
        {skills}
      </section>
    );
  };
}

const mapStateToProps = state => ({
  skills: state.state.skills
});

export default connect(mapStateToProps)(Skills);
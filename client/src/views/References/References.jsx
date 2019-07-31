import React, { Component } from 'react';

class References extends Component {

  render() {
    const refs = this.props.references.map((ref, i) => {
      return (
        <div key={i} className="reference" style={{ backgroundImage: `url(${ref.img})` }}>
          <a href={ref.link} target="_blank" rel="noopener noreferrer">
            { ref.name }
          </a>
        </div>
      );
    });
    return (
      <section id="references">
        <h3 className={this.props.activeSection === 'References' ? "active-title" : ""}>References</h3>
        <div className="references">
          { refs }
        </div>
      </section>
    );
  }
}

export default References;
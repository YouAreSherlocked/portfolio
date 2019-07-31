import React, { Component } from 'react';

class CV extends Component {

  render() {
    return (
      <section id="cv">
        <h3 className={this.props.activeSection === 'CV' ? 'active-title' : ''}>CV</h3>
        <div>
          <div className="cv-group">
            <img src={require(`../../assets/img/cv/portfolio_swisscom${this.props.dark ? '_bright' : ''}.svg`)} alt="Logo Swisscom" />
            <div>
              <h4>2017 - 2021</h4>
              <p>Informatiker Applikationsentwicklung Lehre bei Swisscom AG</p>
            </div>
          </div>
          <div className="cv-group">
            <img src={require(`../../assets/img/cv/portfolio_optasia${this.props.dark ? '_bright' : ''}.svg`)} alt="Logo Swisscom" />
            <div>
              <h4>2015 - 2017</h4>
              <p>3D Visualizer & Mikroprozessor Programmierung bei Optasia AG (20% - 100%)</p>
            </div>
          </div>
          <div className="cv-group">
            <img src={require(`../../assets/img/cv/portfolio_mgd${this.props.dark ? '_bright' : ''}.svg`)} alt="Logo Swisscom" />
            <div>
              <h4>2013 - 2014</h4>
              <p>1. Lehrjahr Grafiker bei MGD Bern (Abbruch)</p>
            </div>
          </div>
          <div className="cv-group">
            <img src={require(`../../assets/img/cv/portfolio_aupair${this.props.dark ? '_bright' : ''}.svg`)} alt="Logo Swisscom" />
            <div>
              <h4>2012 - 2013</h4>
              <p>Au Pair Aufenthalt mit Französisch B1 Zertifikat</p>
            </div>
          </div>
          <div className="cv-group">
            <img src={require(`../../assets/img/cv/portfolio_sfgbb${this.props.dark ? '_bright' : ''}.svg`)} alt="Logo Swisscom" />
            <div>
              <h4>2011 - 2012</h4>
              <p>Vorkurs Kunst & Design SFGB Biel</p>
            </div>
          </div>
          <div className="cv-group">
            <img src={require(`../../assets/img/cv/portfolio_madretsch${this.props.dark ? '_bright' : ''}.svg`)} alt="Logo Swisscom" />
            <div>
              <h4>2008 - 2011</h4>
              <p>7. - 9. Klasse Sekundarschule OSZ Madretsch</p>
            </div>
          </div>
          <div className="cv-group">
            <img src={require(`../../assets/img/cv/portfolio_battenberg${this.props.dark ? '_bright' : ''}.svg`)} alt="Logo Swisscom" />
            <div>
              <h4>2003 - 2008</h4>
              <p>2. - 6. Klasse Primarschule Battenberg (1. Klasse übersprungen)</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CV;
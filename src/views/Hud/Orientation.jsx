import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';
let scroll = 0;
let lastScroll = 0;

class Orientation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: ""
    }

    this.showTitle = this.showTitle.bind(this);
    this.hideTitle = this.hideTitle.bind(this);
  }

  componentDidMount() {
    this.handleScroll();
  }

  componentWillReceiveProps() {
    this.handleScroll();
  }

  getPos(e) {
    return e.getBoundingClientRect().top + document.documentElement.scrollTop;
  }

  createPoints() {
    return(
      this.props.sections.map(section => (
        <a href={"#" + section.toLowerCase().replace(" ", "")} 
           key={section} 
           onMouseOver={() => this.showTitle(section)} 
           onMouseOut={this.hideTitle}>
          <div className={this.state.active === section ? "active" : ""}></div>
          <p className={this.state.active === section ? "active appear-from-left" : ""}>{section}</p>
        </a>
      ))
    );
  }

  handleScroll() {
    let active = "";
    scroll = this.props.scroll + (scroll < lastScroll ? 200 : 500);
    const sections = this.props.sections.map(s => (
      document.getElementById(s.toLowerCase().replace(" ", ""))
    ));

    if (scroll < (this.getPos(sections[0]))) {
      active = "";
    }
    else {
      for (let i=0; i < sections.length -1; i++) {
        if (scroll >= this.getPos(sections[i]) && scroll < this.getPos(sections[i+1])) {
          active = this.props.sections[i];
          break;
        }
        else {
          active = this.props.sections[sections.length -1];
        }
      }
    }
    this.showTitle(active);
    lastScroll = scroll;
  }

  showTitle(e) {
    this.setState({
      active: e
    });
  }

  hideTitle() {
    this.setState({
      active: ""
    });
  }

  render() {
    const { scroll, trigger } = this.props;
    return (
      scroll > trigger ? 
        <div className="left orientation appear">
          <div className="line"></div>
          {this.createPoints()}
        </div>
      : null
    );
  };
}

export default withRouter(Orientation);
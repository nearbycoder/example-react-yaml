import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class SideNav extends Component {
  constructor(props) {
    super();

    this.state = {
      navOpen: false
    }

    this.toggleNav = this.toggleNav.bind(this);
    this.scrollTop = this.scrollTop.bind(this);
  }

  toggleNav() {
    this.setState({navOpen: !this.state.navOpen});
  }

  scrollTop() {
    window.scrollTo(0, 0);
    this.setState({navOpen: false});
  }

  render() {
    const navSide = this.props.match.isExact ? "nav__side--bottom" : "nav__side"
    return (
      <div {...this.props}>
        <div className={this.props.visible ? `active ${navSide}` : navSide}>
          <div className="nav__side__logo">
            <Link to="/" onClick={this.scrollTop}>Logo</Link>
          </div>
          <button className="nav__side__toggle" onClick={this.toggleNav}>
            {this.state.navOpen ? (<span>X</span>) : (<span>=</span>)}
          </button>
          <div className="nav__side__social">Social</div>
        </div>
        <div className={this.state.navOpen && this.props.visible ? 'active nav__side__slideout' : 'nav__side__slideout'}>
          <ul className="nav__side__slideout__list">
            <li className="nav__side__slideout__list__item">
              <Link to="/food" onClick={this.scrollTop}>Food</Link>
            </li>
            <li className="nav__side__slideout__list__item">
              <Link to="/family" onClick={this.scrollTop}>Family</Link>
            </li>
            <li className="nav__side__slideout__list__item">
              <Link to="/money" onClick={this.scrollTop}>Money</Link>
            </li>
            <li className="nav__side__slideout__list__item">
              <Link to="/immigration" onClick={this.scrollTop}>Immigration</Link>
            </li>
            <li className="nav__side__slideout__list__item">
              <Link to="/game-culture" onClick={this.scrollTop}>Game Culture</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
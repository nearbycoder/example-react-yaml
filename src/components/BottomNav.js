import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class BottomNav extends Component {
  constructor() {
    super();

    this.scrollTop = this.scrollTop.bind(this);
  }

  scrollTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="nav__bottom">
        <ul className="nav__bottom__list">
          <li className="nav__bottom__list__item">
            <Link to="/" onClick={this.scrollTop}>Logo</Link>
          </li>
          <li className="nav__bottom__list__item">
            <Link to="/food" onClick={this.scrollTop}>Food</Link>
          </li>
          <li className="nav__bottom__list__item">
            <Link to="/family" onClick={this.scrollTop}>Family</Link>
          </li>
          <li className="nav__bottom__list__item">
            <Link to="/money" onClick={this.scrollTop}>Money</Link>
          </li>
          <li className="nav__bottom__list__item">
            <Link to="/immigration" onClick={this.scrollTop}>Immigration</Link>
          </li>
          <li className="nav__bottom__list__item">
            <Link to="/game-culture" onClick={this.scrollTop}>Game Culture</Link>
          </li>
        </ul>
      </div>
    );
  }
}
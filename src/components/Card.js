import React, { Component } from 'react';

export default class Card extends Component {
  render() {
    return (
      <div className="card">
        <img className="card__image" alt="" src={this.props.data.image} />
        <div className="card__content">
          <h5>{this.props.data.title}</h5>
          <hr/>
          <p>{this.props.data.content}</p>
        </div>
      </div>
    );
  }
}
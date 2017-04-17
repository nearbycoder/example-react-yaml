import React from 'react';

export default (props) => (
  <div className="banner">
    <div className="banner__info">
      <h1 className="banner__info__title">{props.data.title}</h1>
      <h5 className="banner__info__subtitle">{props.data.subtitle}</h5>
    </div>
  </div>
)
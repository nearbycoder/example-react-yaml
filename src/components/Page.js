import React, { Component } from 'react';
import BottomNav from './BottomNav';
import getComponent from '../lib/getComponent';
import YAML from 'yamljs';

export default class Page extends Component {
  constructor(props) {
    super();

    this.state = {
      sections: []
    }
    YAML.load(props.url, function(result) {
      this.setState({sections: result.sections})
    }.bind(this));
  }

  renderSections() {
    return this.state.sections.map((section, index) => {
      if (section.components) {
        return (
          <div key={index} className="section">
          {section.components.map((section, index) => {
            let TagName = getComponent(section.component);
            return (
              <div key={index} className="row">
                <TagName data={section} />
              </div>
            )
          })}
          </div>
        )
      } else {
        let TagName = getComponent(section.component);
        return <TagName key={index} data={section} />
      }
    })
  }

  render() {
    return (
      <div className="wrapper">
        {this.renderSections()}
        <BottomNav />
      </div>
    );
  }
}
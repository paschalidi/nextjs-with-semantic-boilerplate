/**
 *
 * TextLeft
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

class TextLeft extends React.Component { // eslint-disable-line react/prefer-stateless-function
  renderText({ title, subtitle, anchor, prime }) {
    if (prime) {
      return (
        <div className="background-color-prime text-block pad-left">
          <div className="floating-text-content">
            <h1>{title}</h1>
            <div className="color-sec">{subtitle}</div>
            <a>{anchor}</a>
          </div>
        </div>
      );
    }
    return (
      <div className="background-color-sec text-block pad-left">
        <div className="floating-text-content">
          <h1>{title}</h1>
          <div className="color-sec">{subtitle}</div>
          <a>{anchor}</a>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderText(this.props)}
      </div>
    );
  }
}

export default TextLeft;

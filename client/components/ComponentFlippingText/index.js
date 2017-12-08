/**
 *
 * ComponentFlippingText
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import {} from 'semantic-ui-react';


class ComponentFlippingText extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    children: '',
    moreChildren: false
  };

  render() {

    return (
      <div>
        {/* language=CSS */}
        <style jsx>{`
            span {
                text-decoration: none;
                -webkit-transition: color 0.3s;
                transition: color 0.3s;
                outline: none;
            }

            span.flip-animate span {
                position: relative;
                display: inline-block;
                padding: 0;
                -webkit-transition: -webkit-transform 0.3s;
                transition: -webkit-transform 0.3s;
                transition: transform 0.3s;
                transition: transform 0.3s, -webkit-transform 0.3s;
                -webkit-transform-origin: 50% 0;
                transform-origin: 50% 0;
                -webkit-transform-style: preserve-3d;
                transform-style: preserve-3d;
            }

            span.flip-animate span:before {
                position: absolute;
                top: 100%;
                left: 0;
                width: 100%;
                height: 100%;
                content: attr(data-hover);
                -webkit-transition: color 0.3s;
                transition: color 0.3s;
                -webkit-transform: rotateX(-90deg);
                transform: rotateX(-90deg);
                -webkit-transform-origin: 50% 0;
                transform-origin: 50% 0;
                text-align: center;
            }

            span.flip-animate:hover span, span.flip-animate:focus span {
                -webkit-transform: rotateX(90deg) translateY(-22px);
                transform: rotateX(90deg) translateY(-22px);
            }

            span.flip-animate:hover span:before, span.flip-animate:focus span:before {
                background-color: #fcfcfc;
                color: #000;
            }
        `}</style>
        <span className="paragraph-s flip-animate" target="_blank">{this.props.children}<span
          className="invert-colors"
          data-hover={this.props.text}
        >{this.props.text}</span> {this.props.moreChildren && this.props.moreChildren}</span>
      </div>
    );
  }
}

export default ComponentFlippingText;

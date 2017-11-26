/**
 *
 * ComponentUnderlineText
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import {} from 'semantic-ui-react';

class ComponentUnderlineText extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;

    return (
      <div>
        <style jsx>{`
        .wrapper {
          display: block;
          position: absolute;
          top: 50%;
          left:50%;
          -webkit-transform: translate(-50%,-50%);
        }

        .wrapper div {
          text-decoration: none;
          display: inline-block;
          position: relative;
        }

        /*effect-underline*/
        div.effect-underline:after {
          content: '';
          position: absolute;
          left: 0;
          display: inline-block;
          height: 1em;
          width: 100%;
          border-bottom: 1px solid;
          margin-top: 10px;
          opacity: 0;
          -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
          transition: opacity 0.35s, transform 0.35s;
          -webkit-transform: scale(0,1);
          transform: scale(0,1);
        }

        div.effect-underline:hover:after {
          opacity: 1;
          -webkit-transform: scale(1);
          transform: scale(1);
        }
        `}</style>
        <div className="wrapper">
          <div className="effect-underline">{children}</div>
        </div>
      </div>
    );
  }
}

export default ComponentUnderlineText;

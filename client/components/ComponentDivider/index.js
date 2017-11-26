/**
 *
 * ComponentDivider
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import Zigzag from '../../static/svgs/zigzag.svg'
import SingleDesktop from '../SingleDesktop/index';
import ComponentSvg from '../ComponentSvg/index';

class ComponentDivider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* language=CSS*/}
        <style jsx>
          {`
              .zigzag {
                  margin: 7.5% 0;
                  background: #FFEA03;
                  position: relative;
                  height: 16px;
                  z-index: 1;
                  width: 176px;
                  margin: 0 auto;
              }

              .zigzag:before, .zigzag:after {
                  content: "";
                  display: block;
                  position: absolute;
                  left: 0;
                  right: 0;
              }

              .zigzag:before {
                  height: 12px;
                  top: 110%;
                  background: -webkit-linear-gradient(225deg, #212121 8px, transparent 0) 0 8px, -webkit-linear-gradient(315deg, #212121 8px, transparent 0) 0 8px;
                  background: linear-gradient(-135deg, #212121 8px, transparent 0) 0 8px, linear-gradient(135deg, #212121 8px, transparent 0) 0 8px;
                  background-position: top left;
                  background-repeat: repeat-x;
                  background-size: 16px 16px;
              }

              .zigzag:after {
                  height: 16px;
                  top: 100%;
                  background: -webkit-linear-gradient(225deg, #FFEA03 8px, transparent 0) 0 8px, -webkit-linear-gradient(315deg, #FFEA03 8px, transparent 0) 0 8px;
                  background: linear-gradient(-135deg, #FFEA03 8px, transparent 0) 0 8px, linear-gradient(135deg, #FFEA03 8px, transparent 0) 0 8px;
                  background-position: top left;
                  background-repeat: repeat-x;
                  background-size: 16px 16px;
              }
          `}
        </style>
        <SingleDesktop hasFullScreen={false} hasPaddingTop={false}>
          <div style={{ paddingTop: '5vw' }}>
            <div className="zigzag" />
          </div>
        </SingleDesktop>
      </div>
    );
  }
}

export default ComponentDivider;

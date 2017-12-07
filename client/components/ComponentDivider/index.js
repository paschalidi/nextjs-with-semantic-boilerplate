/**
 *
 * ComponentDivider
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import Zigzag from '../../static/svgs/zigzag.svg';
import SingleDesktop from '../SingleDesktop/index';
import ComponentSvg from '../ComponentSvg/index';


class ComponentDivider extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        {/* language=CSS*/}
        <style jsx>
          {`
              hr {
                  position: relative;
                  width: 100%;
                  padding-top: 23px;
                  height: 1px;
                  border: 0;
              }

              hr:before {

                  content: "";
                  display: block;
                  position: relative;
                  top: -21px;
                  height: 22px;
                  background: linear-gradient(45deg, transparent 46px, black 47px, transparent 45px) 0 0,
                  linear-gradient(-45deg, transparent 46px, black 47px, transparent 45px) 0 0;
                  background-repeat: repeat-x;
                      background-size: 24px 55px;
    width: 216px;
    margin: 0 auto;
              }
          `}
        </style>
        <SingleDesktop hasFullScreen={false} hasPaddingTop={false}>
          <hr />
        </SingleDesktop>
      </div>
    );
  }
}

export default ComponentDivider;

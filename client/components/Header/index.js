/**
 *
 * Header
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import { Grid } from 'semantic-ui-react';

import Mobile from '../Responsive/Mobile';
import TabletAndComputer from '../Responsive/TabletAndComputer';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { renderMsg: false, }

  render() {
    const { children } = this.props;
    return (
      <div className="aligner">
        <style jsx>
          {`
          .vertical-middle {
            display: flex !important;
            align-items: center !important;
          }
          .aligner {
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -webkit-align-items: center;
            -ms-flex-align: center;
            align-items: center;
            min-height: 24em;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
          }
          .aligner-item {
            width:100%;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 0.6s;
          }
          `}
        </style>
        <div className="aligner-item full-height">
          <Grid className="header-full-width-s" centered stretched stackable>
            <Grid.Column>
              {children}
            </Grid.Column>
          </Grid>
        </div>
      </div>
    )
  }
}

export default Header;

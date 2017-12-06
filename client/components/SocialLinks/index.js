/**
 *
 * SocialLinks
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Router from 'next/router';

import { Grid } from 'semantic-ui-react';
import SingleDesktop from '../SingleDesktop/index';
import SocialGithub from '../SocialGithub/index';
import SocialStackOverflow from '../SocialStackOverflow/index';
import SocialEmail from '../SocialEmail/index';
import SocialLinkedin from '../SocialLinkedin/index';
import Animations from '../Animations/index';


class SocialLinks extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    hasColorPrime: false
  };

  handleClick(name) {
    Router.push(`/${name}`).then(() => window.scrollTo(0, 0));
    Router.prefetch(`/${name}`);
  }

  render() {
    const iconPadding = { paddingLeft: '1vw', paddingRight: '1vw' };

    return (
      <div>
        {/* language=CSS */}
        <style jsx>
          {`
              .socialLinks:before {
                  content: "";
                  position: absolute;
                  left: 0;
                  top: 50%;
                  -webkit-transform: translateY(1px);
                  transform: translateY(1px);
                  float: left;
                  width: 100%;
                  max-width: 30vw;
                  padding-left: 20px;
                  padding-right: 20px;
                  height: 1px;
                  background: #313541;
                  display: block;
              }
          `}
        </style>
        <div>
          <div style={{ paddingTop: '2vw' }}>
            <Animations classes="fadeInLeft">
              <SingleDesktop hasFullScreen={false} hasPaddingTop={false}>
                <Grid container>
                  <Grid.Row>
                    <Grid.Column width={4}>
                      <div className="socialLinks" />
                    </Grid.Column>
                    <div style={iconPadding}>
                      <SocialGithub size="large" />
                    </div>
                    <div style={iconPadding}>
                      <SocialStackOverflow size="large" />
                    </div>
                    <div style={iconPadding}>
                      <SocialLinkedin size="large" />
                    </div>
                    <div style={iconPadding}>
                      <SocialEmail size="large" />
                    </div>
                  </Grid.Row>
                </Grid>
              </SingleDesktop>
            </Animations>
          </div>
        </div>
      </div>
    );
  }
}

export default SocialLinks;

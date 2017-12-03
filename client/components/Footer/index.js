/**
 *
 * Footer
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Router from 'next/router';
import Particles from 'react-particles-js';

import { Grid } from 'semantic-ui-react';
import SingleDesktop from '../SingleDesktop/index';
import ComponentParagraph from '../ComponentParagraph/index';


class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    hasColorPrime: false
  };

  handleClick(name) {
    Router.push(`/${name}`).then(() => window.scrollTo(0, 0));
    Router.prefetch(`/${name}`);
  }

  render() {
    const ColumnStyle = { margin: '0 auto' };
    return (
      <div>
        <div className="footer background-color-black">
          <SingleDesktop hasPaddingTop={false} hasFullScreen={false}>
            <Particles
              params={{
                'particles': {
                  'number': {
                    'value': 15,
                    'density': {
                      'enable': true,
                      'value_area': 800
                    }
                  },
                  'color': {
                    'value': '#ffffff'
                  },
                  'shape': {
                    'type': 'circle',
                    'stroke': {
                      'width': 0,
                      'color': '#000000'
                    },
                    'polygon': {
                      'nb_sides': 10
                    },
                    'image': {
                      'src': 'img/github.svg',
                      'width': 100,
                      'height': 100
                    }
                  },
                  'opacity': {
                    'value': 0.06313181133058181,
                    'random': true,
                    'anim': {
                      'enable': true,
                      'speed': 0.4795204795204795,
                      'opacity_min': 0.03196803196803197,
                      'sync': true
                    }
                  },
                  'size': {
                    'value': 3,
                    'random': true,
                    'anim': {
                      'enable': false,
                      'speed': 20,
                      'size_min': 0.1,
                      'sync': false
                    }
                  },
                  'line_linked': {
                    'enable': true,
                    'distance': 80.17060304327615,
                    'color': '#ffffff',
                    'opacity': 0.4,
                    'width': 1
                  },
                  'move': {
                    'enable': true,
                    'speed': 6,
                    'direction': 'none',
                    'random': false,
                    'straight': false,
                    'out_mode': 'out',
                    'bounce': false,
                    'attract': {
                      'enable': false,
                      'rotateX': 600,
                      'rotateY': 1200
                    }
                  }
                },
                'retina_detect': true
              }}
            />
            <div className="flex" style={{ minHeight: '20vw' }}>
              <div className='bottom' />
              <Grid container centered stretched stackable>
                <Grid.Row columns="equal">
                  <Grid.Column width={2}>
                    <div
                      onClick={this.handleClick.bind(this, '')}
                      style={ColumnStyle}
                      className="mouse-on-link-hover invert-on-hover--footer color-white"
                    >
                      <ComponentParagraph hasTextVerySm hasTextAlignCenter children="PROFILE" />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <div
                      onClick={this.handleClick.bind(this, 'work')}
                      style={ColumnStyle}
                      className="mouse-on-link-hover invert-on-hover--footer color-white"
                    >
                      <ComponentParagraph hasTextVerySm hasTextAlignCenter children="WORK" />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <div
                      onClick={this.handleClick.bind(this, 'aboutme')}
                      style={ColumnStyle}
                      className="mouse-on-link-hover invert-on-hover--footer color-white"
                    >
                      <ComponentParagraph hasTextVerySm hasTextAlignCenter children="ABOUT ME" />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <div
                      onClick={this.handleClick.bind(this, 'contact')}
                      style={ColumnStyle}
                      className="mouse-on-link-hover invert-on-hover--footer color-white"
                    >
                      <ComponentParagraph
                        hasTextVerySm
                        hasTextAlignCenter
                        children="GET IN TOUCH"
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column width={2}>
                    <div
                      style={ColumnStyle}
                      className="mouse-on-link-hover invert-on-hover--footer color-white"
                    >
                      <ComponentParagraph hasTextVerySm hasTextAlignCenter children="LEGAL" />
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <div
                      style={{ paddingTop: '1vw', margin: '0 auto' }}
                      className="color-white paragraph-very-sm-s"
                    >
                      YOU SHOULD FOLLOW ME ON <a
                      className="mouse-on-link-hover invert-on-hover--footer"
                      target="_blank"
                      href="https://github.com/paschalidi"
                    >
                      GITHUB
                    </a>, <a
                      target="_blank"
                      href="https://www.linkedin.com/in/christos-paschalidis/"
                      className="mouse-on-link-hover invert-on-hover--footer"
                    >LINKEDIN</a> OR <a
                      target="_blank"
                      href="https://stackoverflow.com/users/6013423/paschalidis-christos"
                      className="mouse-on-link-hover invert-on-hover--footer"
                    >STACK OVERFLOW</a>.
                    </div>
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <div
                      style={{
                        fontSize: '10px',
                        paddingTop: '5vw',
                        margin: '0 auto'
                      }}
                      className="color-white"
                    >
                      Copyright 2017 by Christos Paschalidis
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </SingleDesktop>
        </div>
      </div>
    );
  }
}

export default Footer;

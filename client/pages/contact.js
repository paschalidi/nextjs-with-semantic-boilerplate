/**
 *
 * contact
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import { Segment, Grid } from 'semantic-ui-react';
import ReactPlayer from 'react-player';

import Layout from '../components/Layout/index';
import SingleDesktop from '../components/SingleDesktop/index';
import ComponentTitle from '../components/ComponentTitle/index';
import ComponentFlippingText from '../components/ComponentFlippingText/index';


class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const paddingStyle = { padding: '2.5vw 0' };
    return (
      <Layout pageId={this.props.url.pathname} title="Contact">
        <div>
          <ReactPlayer
            style={{
              right: 0,
              top: 0,
              zIndex: 0
            }}
            loop
            width="110vw"
            height="auto"
            url="https://subsign.co/public/video/homepage.mp4"
            playing
          />
        </div>
        <div style={{ position: 'absolute', top: 0 }}>
          <SingleDesktop>
            <Segment textAlign="center" className='transparent-s'>
              <Segment padded="very" textAlign="center" className='transparent-s'>
                <ComponentTitle hasTextWhite hasTextLg children="Hey, lets talk!" />
              </Segment>
              <Grid centered container>
                <Grid.Row className="padding-none-s" columns={3}>
                  <Grid.Column textAlign="center" className="padding-none-s" width={4}>
                    <div style={paddingStyle}>
                      <a href="tel:+4915783675540" className="paragraph-s">
                        <Segment className='padding-lr-s transparent-s'>
                          <div className="mouse-on-link-hover-footer">
                            <ComponentFlippingText text="+49 1578 3675540" />
                          </div>
                        </Segment>
                      </a>
                    </div>
                  </Grid.Column>
                  <Grid.Column className="padding-none-s" width={1} />
                  <Grid.Column
                    textAlign="center"
                    className="padding-none-s"
                    width={4}
                  >
                    <div style={paddingStyle}>
                      <a
                        target="_top"
                        href={'mailto:paschalidi@outlook.com?Subject=Lets talk!'}
                        className="paragraph-s"
                      >
                        <Segment textAlign="center" className='padding-lr-s transparent-s'>
                          <div className="mouse-on-link-hover-footer">
                            <ComponentFlippingText text="paschalidi@mail" />
                          </div>
                        </Segment>
                      </a>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
          </SingleDesktop>
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Contact);
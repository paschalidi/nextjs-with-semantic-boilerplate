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
import { DefaultPlayer as Video } from 'react-html5video';

import Layout from '../components/Layout/index';
import SingleDesktop from '../components/SingleDesktop/index';
import ComponentTitle from '../components/ComponentTitle/index';


class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const paddingStyle = { padding: '2.5vw 0' };
    return (
      <Layout pageId={this.props.url.pathname} title="Contact">
        <Video
          autoPlay loop muted
          controls={false}
          poster="http://sourceposter.jpg"
        >
          <source src="https://subsign.co/public/video/homepage.mp4" type="video/webm" />
          <track
            label="English"
            kind="subtitles"
            srcLang="en"
            src="http://source.vtt"
            default
          />
        </Video>
        <div className="dark">
          <SingleDesktop>
            <Segment textAlign="center" className='transparent-s'>
              <Segment padded="very" textAlign="center" className='transparent-s'>
                <ComponentTitle hasTextWhite hasTextLg children="Hey, lets talk!" />
              </Segment>
              <Grid centered container>
                <Grid.Row className="padding-none-s" columns={3}>
                  <Grid.Column textAlign="center" className="padding-none-s" width={4}>
                    <a href="tel:+4915783675540" className="paragraph-s">
                      <div className="mouse-on-link-hover-footer scale">
                        <div style={paddingStyle}>
                          <Segment className='padding-lr-s transparent-s'>
                            <div className="paragraph-white-s invert-colors-on-hover">
                              +49 1578 3675540
                            </div>
                          </Segment>
                        </div>
                      </div>
                    </a>
                  </Grid.Column>
                  <Grid.Column className="padding-none-s" width={1} />
                  <Grid.Column
                    textAlign="center"
                    className="padding-none-s"
                    width={4}
                  >
                    <a
                      target="_top"
                      href={'mailto:paschalidi@outlook.com?Subject=Lets talk!'}
                      className="paragraph-s"
                    >
                      <div className="mouse-on-link-hover-footer scale">
                        <div style={paddingStyle}>
                          <Segment textAlign="center" className='padding-lr-s transparent-s'>
                            <div className="paragraph-white-s invert-colors-on-hover">
                              paschalidi@mail
                            </div>
                          </Segment>
                        </div>
                      </div>
                    </a>
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
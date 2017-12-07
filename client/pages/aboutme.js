/**
 *
 * aboutme
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import 'isomorphic-fetch';
import Router from 'next/router';

import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import { Grid } from 'semantic-ui-react';

import Nerd from '../static/svgs/nerd.svg';
import Smile from '../static/svgs/smile.svg';
import Happy from '../static/svgs/happy.svg';

import Scroll from 'react-scroll'; // Imports all Mixins

let Element = Scroll.Element;
let scroller = Scroll.scroller;

import Layout from '../components/Layout/index';
import Animations from '../components/Animations/index';
import ComponentTitle from '../components/ComponentTitle/index';
import SingleDesktop from '../components/SingleDesktop/index';
import Posponer from '../components/Posponer/index';
import ComponentDivider from '../components/ComponentDivider/index';
import ParallaxEffect from '../components/ParallaxEffect/index';
import BounchingArrow from '../components/BounchingArrow/index';
import ComponentFlippingText from '../components/ComponentFlippingText/index';


class Aboutme extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      reveal: false
    };
  }

  handleClick(name) {
    Router.push(`/${name}`).then(() => window.scrollTo(0, 0));
    Router.prefetch(`/${name}`);
  }

  handleHoverOn = () => this.setState({ reveal: true });

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -150
    });
  }

  render() {
    const sectionStyle = { textAlign: 'center' };
    return (
      <Layout pageId={this.props.url.pathname} title="Aboutme">
        {/* language=CSS */}
        <style jsx>{`

            .paragraph-padding {
                padding-top: 3vw;
            }

            .dont-reveal {
                visibility: hidden;
            }

            .section-style {
                padding: 9vw 0;
            }
        `}</style>
        <div className="f7fdfdbackground-color-angled-index-revert">
          <SingleDesktop>
            <div className="section-style">
              <Grid centered container>
                <Grid.Row textAlign="center" columns="equal">
                  <Grid.Column width={10}>
                    <div style={{ textAlign: 'center' }} className="paragraph-s">
                      <Animations>
                        <ComponentTitle hasTextAlignCenter children={'hello'} />
                      </Animations>
                      <div className="paragraph-padding">
                        <Posponer timer={0.4}>
                          <Animations>
                            <br />
                            <ComponentFlippingText children="I am Christos Paschalidis, " text="a web developer."/>
                          </Animations>
                        </Posponer>
                      </div>
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
          </SingleDesktop>

          <div className="mouse-on-link-hover" onClick={() => this.scrollTo()}>
            <BounchingArrow />
          </div>

          <Element name="scroll-to-element" className="element">
            <SingleDesktop hasFullScreen={false}>
              <ParallaxEffect>
                <div className="section-style">
                  <Grid centered container>
                    <Grid.Row textAlign="center" columns="equal">
                      <Grid.Column width={10}>
                        <div style={sectionStyle} className="paragraph-s">
                          <Animations>
                            <ComponentTitle hasTextAlignCenter children={'who am I'} />
                          </Animations>
                          <div className="paragraph-padding">
                            <Posponer timer={0.4}>
                              <Animations>
                                <br />
                                I am Christos Paschalidis, <span
                                className="invert-colors"
                              >a web developer.</span>
                              </Animations>
                            </Posponer>
                          </div>
                        </div>
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </div>
              </ParallaxEffect>
              <ComponentDivider />
            </SingleDesktop>
          </Element>


          <SingleDesktop hasFullScreen={false}>
            <ParallaxEffect>
              <div className="section-style">
                <Grid centered container>
                  <Grid.Row textAlign="center" columns="equal">
                    <Grid.Column
                      width={10}
                      onMouseEnter={this.handleHoverOn}
                    >
                      <div style={sectionStyle} className="reveal paragraph-s">
                        <Animations>
                          <ComponentTitle
                            hasTextAlignCenter
                            children={'what kind of projects I like'}
                          />
                        </Animations>
                        <div className="paragraph-padding">
                          <Posponer timer={0.4}>
                            <Animations>
                              <br />
                              I am Christos Paschalidis, <span
                              className="invert-colors"
                            >a web developer.</span>
                            </Animations>
                          </Posponer>
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </ParallaxEffect>
          </SingleDesktop>

          <SingleDesktop hasFullScreen={false}>
            <ParallaxEffect>
              <div className="section-style">
                <Grid centered container>
                  <Grid.Row textAlign="center" columns="equal">
                    <Grid.Column width={10}>
                      <div style={sectionStyle} className="paragraph-s">
                        <Animations>
                          <ComponentTitle hasTextAlignCenter children={'what I am proud of '} />
                        </Animations>
                        <div className="paragraph-padding">
                          <Posponer timer={0.4}>
                            <Animations>
                              <br />
                              I am Christos Paschalidis, <span
                              className="invert-colors"
                            >a web developer.</span>
                            </Animations>
                          </Posponer>
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </ParallaxEffect>
            <ComponentDivider />
          </SingleDesktop>

          <SingleDesktop hasFullScreen={false}>
            <ParallaxEffect>
              <div className="section-style">
                <Grid centered container>
                  <Grid.Row textAlign="center" columns="equal">
                    <Grid.Column width={10}>
                      <div style={sectionStyle} className="paragraph-s">
                        <Animations>
                          <ComponentTitle
                            hasTextAlignCenter
                            children={'how do I see myself in the future'}
                          />
                        </Animations>
                        <div className="paragraph-padding">
                          <Posponer timer={0.4}>
                            <Animations>
                              <br />
                              I am Christos Paschalidis, <span
                              className="invert-colors"
                            >a web developer.</span>
                            </Animations>
                          </Posponer>
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </ParallaxEffect>
            <ComponentDivider />
          </SingleDesktop>


          <SingleDesktop hasFullScreen={false}>
            <ParallaxEffect>
              <div className="section-style">
                <Grid centered container>
                  <Grid.Row textAlign="center" columns="equal">
                    <Grid.Column width={10}>
                      <div style={sectionStyle} className="paragraph-s">
                        <Animations>

                          <div
                            style={{ lineHeight: '1.2', textAlign: 'center' }}
                            className="header-lg-s invert-colors"
                          >
                            did you like what you read?
                          </div>

                        </Animations>
                        <div className="paragraph-padding">
                          <Posponer timer={0.4}>
                            <Animations>
                              <br />
                              I am Christos Paschalidis, <span
                              className="invert-colors"
                            >a web developer.</span>
                            </Animations>
                          </Posponer>
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </ParallaxEffect>
            <ComponentDivider />

          </SingleDesktop>


          <SingleDesktop hasFullScreen={false}>
            <Grid centered container>
              <Grid.Row textAlign="center" columns="equal">
                <Grid.Column>
                  <div style={sectionStyle}>
                    <Animations classes="fadeInLeft">
                      <div className="paragraph-s">
                        Find out more about my <span
                        onClick={this.handleClick.bind(this, 'work')}
                        className="invert-on-hover anchor-link"
                      >work</span>
                      </div>
                    </Animations>
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </SingleDesktop>
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Aboutme);
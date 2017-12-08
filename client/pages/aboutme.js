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
import axios from 'axios';

import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import { Grid, Segment } from 'semantic-ui-react';

import { Element, scroller } from 'react-scroll';

import Layout from '../components/Layout/index';
import Animations from '../components/Animations/index';
import ComponentTitle from '../components/ComponentTitle/index';
import SingleDesktop from '../components/SingleDesktop/index';
import ComponentDivider from '../components/ComponentDivider/index';
import ParallaxEffect from '../components/ParallaxEffect/index';
import BounchingArrow from '../components/BounchingArrow/index';
import ComponentParagraph from '../components/ComponentParagraph/index';
import FormContactMe from '../components/FormContactMe/index';


class Aboutme extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    textRedux: 'empty'
  };

  constructor(props) {
    super(props);
    this.state = {
      textRedux: props.textRedux,
      mailSent: false
    };
  }

  handleClick(name) {
    Router.push(`/${name}`).then(() => window.scrollTo(0, 0));
    Router.prefetch(`/${name}`);
  }

  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 2000,
      delay: 0,
      smooth: 'easeInOutQuart',
      offset: -150
    });
  }

  handleSubmitForm(textRedux) {
    axios.post('/aboutme-success', { textRedux })
    .then(() => {
      console.log('Email sent');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  handleButtonClick = (email) => () => this.setState({
    textRedux: email
  });

  render() {
    const sectionStyle = { textAlign: 'center' };
    const { textRedux } = this.state;
    return (
      <Layout pageId={this.props.url.pathname} title="About Christos Paschalidis">
        {/* language=CSS */}
        <style jsx>{`
            .no-shadow {
                text-shadow: none !important;
            }

            .white-box {
                background: rgba(255, 255, 255, 0.9);
                padding: 80px;
                outline: 1px solid #fff;
                outline-offset: 8px;
            }

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
        <div className="background-color-angled-index-revert">
          <SingleDesktop>
            <div className="section-style">
              <Grid centered container>
                <Grid.Row textAlign="center" columns="equal">
                  <Grid.Column width={10}>
                    <div style={{ textAlign: 'center' }} className="paragraph-s">
                      <Animations>
                        <ComponentTitle hasTextAlignCenter children={'hello'} />
                      </Animations>
                      <Text children="I am Christos Paschalidis, a web developer" />
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
                        <div style={sectionStyle} className=" paragraph-s ">
                          <Animations>
                            <ComponentTitle hasTextAlignCenter children={'01. history'} />
                          </Animations>
                        </div>
                        <Text children="In the most part a self-taught Developer with over 6 years of coding experience. Grew up with the dream to become a developer. Studied Computer Science and Engineering. Now I’m based in Berlin, Germany, working for Vimcar GmbH and enjoying the life in the city." />
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
                    >
                      <div style={sectionStyle} className="reveal paragraph-s">
                        <Animations>
                          <ComponentTitle
                            hasTextAlignCenter
                            children={'02. what kind of products I like to build'}
                          />
                        </Animations>
                        <div className="paragraph-padding no-shadow">
                          <Text children="I create and build websites to communicate a feeling of joy and comfort that shall invite the user to come back. For me, that means that not only graphical work, but also the frontend development like JS & css, HTML, and a CMS (backend, i know) are part of my field of activity. The development section is really important to me, because I thereby constantly improve my skills and stay up-to-date with new methods and technology." />
                        </div>
                      </div>
                    </Grid.Column>
                  </Grid.Row>
                </Grid>
              </div>
            </ParallaxEffect>
          </SingleDesktop>
          <ComponentDivider />

          <SingleDesktop hasFullScreen={false}>
            <ParallaxEffect>
              <div className="section-style">
                <Grid centered container>
                  <Grid.Row textAlign="center" columns="equal">
                    <Grid.Column width={10}>
                      <div style={sectionStyle} className="paragraph-s">
                        <Animations>
                          <ComponentTitle hasTextAlignCenter children={'03. principles'} />
                        </Animations>
                        <div className="paragraph-padding no-shadow">
                          <Animations>
                            <div style={{ paddingTop: '30px' }} />
                            <Segment padded className='padding-lr-s transparent-s'>
                              <ComponentParagraph
                                hasTextAlignCenter
                                width={80}
                                children="<b>Clean ­– In thinking, in style.</b>"
                              />
                              <ComponentParagraph
                                hasTextAlignCenter
                                width={80}
                                children="Simple, minimal and effective. This is my mantra and method. Clean code, fuss­free interfaces and expert execution, design as it should be."
                              />
                            </Segment>
                            <Segment padded className='padding-lr-s transparent-s'>
                              <ComponentParagraph
                                hasTextAlignCenter
                                width={80}
                                children="<b>Perfection doesn’t do a 9-­5.</b>"
                              />
                              <ComponentParagraph
                                hasTextAlignCenter
                                width={80}
                                children="And neither do I. I’m not bound to any time zones or tied to a desk. The project dictates where I need to be and who I need to collaborate with. Essentially, I always go the extra mile."
                              />
                            </Segment>
                          </Animations>
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
                          {
                            this.state.mailSent
                              ?
                              <ComponentParagraph children={'done baby'} />
                              :
                              <FormContactMe
                                onButtonClick={this.handleButtonClick}
                                onSubmit={this.handleSubmitForm.bind(this, textRedux)}
                              />
                          }
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

const Text = ({ children = null }) => (
  <div className="paragraph-padding no-shadow">
    {/* language=CSS */}
    <style jsx>{`
        .no-shadow {
            text-shadow: none !important;
        }
    `}</style>
    <Animations>
      <div style={{ paddingTop: '30px' }} />
      <ComponentParagraph
        hasTextAlignCenter
        width={80}
        children={children}
      />
    </Animations>
  </div>

);

export default withRedux(initStore)(Aboutme);
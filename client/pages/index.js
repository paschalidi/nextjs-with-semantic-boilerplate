/**
 *
 * index
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Router from 'next/router';

import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import 'isomorphic-fetch';
import { Grid, Icon } from 'semantic-ui-react';

import Header from '../components/Header';

import Layout from '../components/Layout/index';
import Animations from '../components/Animations/index';
import ComponentTitle from '../components/ComponentTitle/index';
import ParallaxEffect from '../components/ParallaxEffect/index';
import AnimateOnce from '../components/AnimateOnce/index';
import Posponer from '../components/Posponer/index';
import AnimateTest from '../components/AnimateVertical/index';
import SocialLinks from '../components/SocialLinks/index';


class Index extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handleClick(name) {
    Router.push(`/${name}`).then(() => window.scrollTo(0, 0));
    Router.prefetch(`/${name}`);
  }

  render() {
    return (
      <Layout pageId={this.props.url.pathname} title="Made with React">
        {/* language=CSS */}
        <style jsx>{`
            .center {
                margin: 0 auto;
            }
        `}</style>
        <div className="background-color-angled-index">
          <Header>
            <Posponer timer={0}>
              <AnimateOnce classes="fadeInLeft">
                <ComponentTitle hasTextAlignCenter hasTextLg children="Think." />
              </AnimateOnce>
            </Posponer>
            <Posponer timer={0.5}>
              <AnimateOnce classes="fadeInRight">
                <ComponentTitle hasTextAlignCenter hasTextLg children="Desing." />
              </AnimateOnce>
            </Posponer>
            <Posponer timer={1}>
              <AnimateOnce classes="fadeInLeft">
                <ComponentTitle hasTextAlignCenter hasTextLg children="Code." />
              </AnimateOnce>
            </Posponer>
            <Posponer timer={1.5}>
              <AnimateOnce classes="fadeInRight">
                <ComponentTitle hasTextAlignCenter hasTextLg children="Repeat." />
              </AnimateOnce>
            </Posponer>
          </Header>
          <SocialLinks />
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);
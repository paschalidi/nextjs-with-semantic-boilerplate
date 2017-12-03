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

import { Segment } from 'semantic-ui-react';

import Layout from '../components/Layout/index';
import SingleDesktop from '../components/SingleDesktop/index';
import ComponentTitle from '../components/ComponentTitle/index';
import ComponentSectionTitle from '../components/ComponentSectionTitle/index';


class Contact extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <Layout pageId={this.props.url.pathname} title="Contact">
        <div className="background-color-yellow">
          <SingleDesktop>
            <Segment textAlign="center" className='transparent-s'>
              <Segment padded textAlign="center" className='transparent-s'>
                <ComponentSectionTitle children="CONTACT" />
              </Segment>
              <Segment padded="very" textAlign="center" className='transparent-s'>
                <ComponentTitle hasTextLg children="Hey, lets talk!" />
              </Segment>
              <br />
              <a
                href="tel:+4915783675540"
                className="scale mouse-on-link-hover-footer header-s invert-colors"
              >
                +49 1578 3675540
              </a>
            </Segment>
          </SingleDesktop>
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Contact);
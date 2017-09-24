/**
 *
 * index
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';
import Link from 'next/link'

import 'isomorphic-fetch';

import Layout from '../components/Layout/index';

class Index extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout pageId={this.props.url.pathname} title="Made with React">
        <style jsx>{``}</style>
        <div>hello from new page and font!</div>
        <Link href="/" name="me">Me</Link>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);
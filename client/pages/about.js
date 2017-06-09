/* eslint-disable react/jsx-filename-extension */

/**
*
* about
*
*/

import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import Layout from '../components/Layout/index';

class About extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout title="About us">
        <style jsx>{`
          p {
            color: red;
          }
        `}</style>
        <p>Hello about!!</p>
      </Layout>
    );
  }
}

export default withRedux(initStore)(About);

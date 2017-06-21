/**
 *
 * index
 *
 */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import initStore from '../store';

import Layout from '../components/Layout/index';
import HeroHeader from '../components/HeroHeader';
import TripleContainer from '../components/TripleContainer';
import SingleContainer from '../components/SingleContainer';

class Index extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Layout title="Vimcar">
        <div>
          <HeroHeader />
          <TripleContainer />
          <SingleContainer />
        </div>

        <style jsx>{`
        `}</style>

      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);

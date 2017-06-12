/* eslint-disable react/jsx-filename-extension */

/**
 *
 * index
 *
 */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import * as contentful from 'contentful'
import initStore from '../store';

import Layout from '../components/Layout/index';

class Index extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const SPACE_ID = 't6jl7vzuhly7';
    const ACCESS_TOKEN = '97fd086dac70531e4eb63ed203557cf2abcb17e01d294492543273427a40798d';
    const AN_ENTRY = '77fQvB40s8Ugmsuu0aqMcI';
    let client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    });

    client.getEntries()
      .then((response) => console.log(response.items))
      .catch(console.error);

    client.getEntry(AN_ENTRY)
      .then((entry) => console.log(entry))
      .catch(console.error)

    return (
      <Layout title="Vimcar">
        <div className="hello">
          <p>Hello Vimcar</p>
          <style jsx>{`
            .hello {
              font: 15px Helvetica, Arial, sans-serif;
              background: #eee;
              padding: 100px;
              text-align: center;
              transition: 100ms ease-in background;
            }
            .hello:hover {
              background: #ccc;
            }
          `}</style>
        </div>
      </Layout>
    );
  }
}

export default withRedux(initStore)(Index);

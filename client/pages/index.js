/**
 *
 * index
 *
 */
/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import withRedux from 'next-redux-wrapper';
import * as contentful from 'contentful'
import initStore from '../store';
import { ACCESS_TOKEN, SPACE_ID, HEADER_ENTRY } from '../contentful';
import Layout from '../components/Layout/index';

class Index extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    let client = contentful.createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    });

    client.getEntries()
      .then((response) => console.log(response.items))
      .catch(console.error);

    client.getEntry(HEADER_ENTRY)
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

/**
 *
 * Layout
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Head from 'next/head';

import GoogleTagManager from '../GoogleTagManager';
import Footer from '../../containers/Footer';
import NavigationMenu from '../NavigationMenu';
import PageLoader from '../PageLoader';

export default class Layout extends React.Component {// eslint-disable-line react/prefer-stateless-function

  render() {
    const { title, children } = this.props
    return (
      <div>
        <Head>
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet" />
          <style>{`
            * { box-sizing: border-box; margin: 0; padding: 0 }
            body { font-family: 'Open Sans', sans-serif; }
          `}
          </style>
          <title>{ title }</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GoogleTagManager gtmId="GTM-5N7BT99" />
        <PageLoader />
        <NavigationMenu />

        { children }

        <Footer />
      </div>
    );
  }
}

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
import VimcarFooter from '../Footer';
import NavigationMenu from '../NavigationMenu';
import PageLoader from '../PageLoader';

class Layout extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" />
          <link rel="stylesheet"
                href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css" />

          <link
            rel="stylesheet prefetch"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/icon.min.css" />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
          <link rel="stylesheet" type="text/css" href="/static/index.css" />
          <link rel="stylesheet" type="text/css" href="/static/semantic/dist/semantic.css" />

          <title>{ title }</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GoogleTagManager gtmId="GTM-5N7BT99" />
        <PageLoader />

        { children }

        <VimcarFooter />
      </div>
    );
  }
}
export default Layout;

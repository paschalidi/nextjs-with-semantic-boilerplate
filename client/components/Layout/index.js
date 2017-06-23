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

import globalStyle from '../../styles/index.css';
import semantic from '../../semantic/dist/semantic.min.css';

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
          <style dangerouslySetInnerHTML={{ __html: globalStyle }} />
          <style dangerouslySetInnerHTML={{ __html: semantic }} />
          <title>{ title }</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GoogleTagManager gtmId="GTM-5N7BT99" />
        <PageLoader />
        <NavigationMenu />

        { children }

        <VimcarFooter />
      </div>
    );
  }
}
export default Layout;

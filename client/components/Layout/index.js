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

import PageLoader from '../PageLoader';

import NavigationMenu from '../NavigationMenu';
import MovingShadow from '../TextShadow/index';
import Footer from '../Footer/index';


class Layout extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { title, children } = this.props;
    return (
      <div>
        <Head>
          <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro" rel="stylesheet" />
          <link rel='shortcut icon' type='image/x-icon' href='../../static/favicon.png' />

          <link
            rel="stylesheet prefetch"
            href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.1.8/components/icon.min.css"
          />

          <link rel="stylesheet" type="text/css" href="/static/index.css" />
          <link rel="stylesheet" type="text/css" href="/static/semantic/dist/semantic.css" />


          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <PageLoader />

        <MovingShadow>
          <NavigationMenu pageId={this.props.pageId} />
          {children}
        </MovingShadow>
        <Footer />
      </div>
    );
  }
}

export default Layout;

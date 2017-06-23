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
          <link
            rel="stylesheet"
            href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Open+Sans:300,400"
            rel="stylesheet"
          />

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

          <style jsx global>
            {`
            * {
            -moz-box-sizing: border-box;
            -webkit-box-sizing: border-box;
            margin: 0;
            padding: 0
            }
            body {
            font-family: 'Open Sans', sans-serif;
            background-color: #fbfcfc;
            }
            .top-10{
            position: relative;
            top: -7em;
            }
            .text-container {
            margin: 0 auto;
            position: relative;
            }
            .padding-zero {
              padding: 0 !important ;
            }
            .product-title{
            font-size: 20px;
            }
            .product-subtitle{
            font-size: 15px;
            }
            .color-prime{
            color: #313541;
            }
            .color-sec{
            color: #777f8e;
            }
            .color-a{
            color: #1f9ac1;
            }
            .background-color-prime{
            background-color: #e3e8ee !important;
            }
            .background-color-sec{
            background-color: #f2f2f2 !important;
            }
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

        <VimcarFooter />
      </div>
    );
  }
}
export default Layout;

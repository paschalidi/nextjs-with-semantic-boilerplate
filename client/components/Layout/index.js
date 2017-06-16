/**
 *
 * Layout
 *
 */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Head from 'next/head';
import GoogleTagManager from '../GoogleTagManager';
import NavigationMenu from '../../containers/NavigationMenu'

export default class Layout extends React.Component {

  render() {
    const { title, children } = this.props
    return (
      <div>
        <Head>
          <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
          <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' type='text/css' />

          <style>{`
            * { box-sizing: border-box; margin: 0; padding: 0 }
            body {
              font-family: 'Source Sans Pro', sans-serif;
            }
          `}
          </style>
          <title>{ title }</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GoogleTagManager gtmId='GTM-5N7BT99' />
        <NavigationMenu />
        { children }

        <footer>
          {'I`m here to stay'}
        </footer>
      </div>
    )
  }
}

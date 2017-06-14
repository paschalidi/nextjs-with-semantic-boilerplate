/**
 *
 * Layout
 *
 */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import GoogleTagManager from '../GoogleTagManager';

export default class Layout extends React.Component {

  render() {
    const { title, children } = this.props
    return (
      <div>
        <Head>
          <style>{`
            * { box-sizing: border-box; margin: 0; padding: 0 }
            body {
              font: 15px Helvetica, Arial, sans-serif;
            }
          `}
          </style>
          <title>{ title }</title>
          <meta charSet="utf-8" />
          <meta name="viewport"
                content="initial-scale=1.0, width=device-width" />
        </Head>
        <header>
          <nav>
            <Link href="/"><a>Home</a></Link> |
            <Link href="/about"><a>About</a></Link> |
          </nav>
        </header>
        <GoogleTagManager gtmId='GTM-5N7BT99' />

        { children }

        <footer>
          {'I`m here to stay'}
        </footer>
      </div>
    )
  }
}

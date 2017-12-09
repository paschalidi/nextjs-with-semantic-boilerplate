/**
 *
 * PageLoader
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import NProgress from 'nprogress';
import Router from 'next/router';


Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

export default () => (
  <div>
    {/* language=CSS */}
    <style>
      {`
          /* Make clicks pass-through */
          #nprogress {
              pointer-events: none;
          }

          #nprogress .bar {
              background: #fcfcfc;

              position: fixed;
              z-index: 1031;
              top: 0;
              left: 0;

              width: 100%;
              height: 3px;
          }

          /* todo use this for whole page loading */
          .nprogress-busy {
          }

          /* Fancy blur effect */
          #nprogress .peg {
              display: block;
              position: absolute;
              right: 0px;
              width: 100px;
              height: 100%;
              box-shadow: none;
              opacity: 1.0;
              -webkit-transform: rotate(3deg) translate(0px, -4px);
              -ms-transform: rotate(3deg) translate(0px, -4px);
              transform: rotate(3deg) translate(0px, -4px);
          }

          /* Remove these to get rid of the spinner */
          #nprogress .spinner {
              display: block;
              position: fixed;
              z-index: 1031;
              top: 15px;
              right: 15px;
          }

          #nprogress .spinner-icon {
              visibility: hidden;
              width: 18px;
              height: 18px;
              box-sizing: border-box;

              border: solid 2px transparent;
              border-top-color: #212121;
              border-left-color: #212121;
              border-radius: 50%;

              -webkit-animation: nprogress-spinner 400ms linear infinite;
              animation: nprogress-spinner 400ms linear infinite;
          }

          .nprogress-custom-parent {
              overflow: hidden;
              position: relative;
          }

          .nprogress-custom-parent #nprogress .spinner,
          .nprogress-custom-parent #nprogress .bar {
              position: absolute;
          }

          @-webkit-keyframes nprogress-spinner {
              0% {
                  -webkit-transform: rotate(0deg);
              }
              100% {
                  -webkit-transform: rotate(360deg);
              }
          }

          @keyframes nprogress-spinner {
              0% {
                  transform: rotate(0deg);
              }
              100% {
                  transform: rotate(360deg);
              }
          }
      `}
    </style>
  </div>
)
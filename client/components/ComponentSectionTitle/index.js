/**
 *
 * ComponentSectionTitle
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import marked from 'marked';


const ComponentSectionTitle = ({
                                 children = null,
                                 classes = '-default',
                                 hasTextWhite = false,
                                 paddingTop = 0,
                                 paddingLeft = 0,
                                 paddingRight = 0,
                                 paddingBottom = 0
                               }) => (
  <div
    style={{
      paddingTop: `${paddingTop}px`,
      paddingBottom: `${paddingBottom}px`,
      paddingLeft: `${paddingLeft}px`,
      paddingRight: `${paddingRight}px`
    }}
  >
    {
      children ?
        <div>
          {/* language=CSS */}
          <style jsx>{`
              .text-decoration {
                  border-bottom: 1px solid #212121;
                  display: inline-block;
              }

              .padding-title--single-with-text {
                  padding: 5% 0 10px 0
              }

              .padding-title--section-single {
                  padding: 0;
              }

              .padding-title--default {
                  padding: 0;
              }

              .padding-title--on-funktionen {
                  padding: 0 0 15px 0;
              }

              .padding-title--section-top {
                  padding: 0 0 15px 0;
              }

              .padding-left {
                  padding-left: 0.5em;
              }

              /*mobile*/
              @media screen and (min-width: 320px) and (max-width: 769px) {
                  .padding-title--default {
                      padding: 0 0 19px 0;
                  }

                  .padding-title--section-top {
                      padding: 0 0 19px 0 !important;
                  }
              }
          `}
          </style>
          <div
            className={`text-decoration section-title-s padding-title-${classes} ${hasTextWhite ? 'color-white' : null}`}
            dangerouslySetInnerHTML={{ __html: marked(children) }}
          />
        </div>
        :
        <span style={{ display: 'none' }} />
    }
  </div>
);

export default ComponentSectionTitle;
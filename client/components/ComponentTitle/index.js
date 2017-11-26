/**
 *
 * ComponentTitle
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

const ComponentTitle = ({
                          children = null,
                          hasTextAlignCenter = false,
                          hasTextLg = false,
                          hasTextSm = false,
                          hasTextWhite = false,
                          hasTextSec = false,
                          classes = '-default'
                        }) => (
  <div className={`padding-title-${classes}`}>
    {/* language=CSS */}
    <style jsx>{`
        .padding-title--default {
            padding: 0 0
        }

        .middle {
            text-align: center;
            margin: 0 auto;
        }

        .line-height {
            line-height: 1.2em
        }

    `}
    </style>

    {
      children ?
        <div
          className={`
          line-height
          ${hasTextLg ? 'header-lg-s' : hasTextSm ? 'header-sm-s' : 'header-s'}
          ${hasTextWhite ? 'color-white' : null}
          ${hasTextSec ? 'color-sec' : null}
          ${hasTextAlignCenter ? 'middle' : null}
          `}
        >
          {children}
        </div>
        : <span style={{ display: 'none' }} />
    }
  </div>
);

export default ComponentTitle;
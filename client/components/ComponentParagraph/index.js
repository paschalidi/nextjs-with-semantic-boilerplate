/**
 *
 * ComponentParagraph
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import marked from 'marked';


const ComponentParagraph = ({
                              children = null,
                              hasTextLg = false,
                              hasTextSm = false,
                              hasTextVerySm = false,
                              hasTextWhite = false,
                              hasTextBlue = false,
                              classes = '-default',
                              width = 100,
                              hasTextAlignCenter = false
                            }) => (
  <div
    style={{ width: `${width}%` }}
    className={`padding-title-${classes}  ${hasTextAlignCenter ? 'middle' : null}`}
  >
    {/* language=CSS */}
    <style jsx>{`
        .middle {
            text-align: center;
            margin: 0 auto;
        }
    `}
    </style>
    {
      children ?
        <div
          className={`
          ${hasTextLg ? 'paragraph-lg-s' : hasTextSm ? 'paragraph-sm-s' : hasTextVerySm ? 'paragraph-very-sm-s' : 'paragraph-s'}
          ${hasTextWhite ? 'color-white' : null}
          ${hasTextBlue ? 'color-a' : null}
          `}
          dangerouslySetInnerHTML={{ __html: marked(children) }}
        />
        : <span style={{ display: 'none' }} />
    }
  </div>
);

export default ComponentParagraph;
/**
 *
 * ComponentSvg
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import { Image } from 'semantic-ui-react';


class ComponentSvg extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    isRotated45: false,
    isRotated90: false,
    isRotated180: false,
    isRotated270: false,
    isCentered: false,
    hasTextAlignRight: false,
    width: 200,
  };

  render() {
    const { children, isRotated45, isRotated270, isRotated180, isRotated90, isCentered, hasTextAlignRight, width } = this.props;

    return (
      <div className={`rotated ${isCentered ? 'centered' : hasTextAlignRight ? 'right' : 'left' }  ${isRotated45 ? 'rotate' : isRotated90 ? 'rotated90' : isRotated180 ? 'rotated180' : isRotated270 ? 'rotated270' : null }`}>
        {/* language=CSS */}
        <style jsx>{`
            .left {
                text-align: left;
            }

            .right {
                text-align: right;
            }

            .centered {
                text-align: center;
            }

            .rotate {
                transform: rotate(45deg) !important;
            }

            .rotated90 {
                transform: rotate(90deg) !important;
            }

            .rotated180 {
                transform: rotate(180deg) !important;
            }

            .rotated270 {
                transform: rotate(270deg) !important;
            }
        `}
        </style>

        <Image style={{ width: `${width}px` }}>
          {children}
        </Image>
      </div>
    );
  }
}

export default ComponentSvg;

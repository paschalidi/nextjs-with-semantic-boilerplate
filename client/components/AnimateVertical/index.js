/**
 *
 * AnimateTest
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import ComponentSvg from '../ComponentSvg/index';


class AnimateTest extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    children: false,
  };

  render() {

    return (
      <div>
        {/* language=CSS */}
        <style jsx>{`
            .animated {
                -webkit-animation-fill-mode: both;
                -moz-animation-fill-mode: both;
                -ms-animation-fill-mode: both;
                -o-animation-fill-mode: both;
                animation-fill-mode: both;
                -webkit-animation-duration: 2s;
                -moz-animation-duration: 2s;
                -ms-animation-duration: 2s;
                -o-animation-duration: 2s;
                animation-duration: 2s;
            }

            @keyframes fadeInLeft {
                0% {
                    opacity: 1;
                    transform: translateY(0);
                }

                100% {
                    opacity: 0;
                    transform: translateY(100vw);
                }
            }

            .fadeInLeft {
                -webkit-animation-name: fadeInLeft;
                -moz-animation-name: fadeInLeft;
                -o-animation-name: fadeInLeft;
                animation-name: fadeInLeft;
            }
        `}</style>
        <div
          style={{ position: 'absolute', bottom: '100vw', left: '48%', zIndex:10 }}
          className={`animated fadeInLeft`}
        >
          <ComponentSvg width={60} children={this.props.children} />
        </div>
      </div>
    );
  }
}

export default AnimateTest;

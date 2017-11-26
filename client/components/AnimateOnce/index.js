/**
 *
 * AnimateOnce
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

class AnimateOnce extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children, classes = false } = this.props;
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
                -webkit-animation-duration: 1s;
                -moz-animation-duration: 1s;
                -ms-animation-duration: 1s;
                -o-animation-duration: 1s;
                animation-duration: 1s;
            }

            .animated.hinge {
                -webkit-animation-duration: 2s;
                -moz-animation-duration: 2s;
                -ms-animation-duration: 2s;
                -o-animation-duration: 2s;
                animation-duration: 2s;
            }

            @-webkit-keyframes bounceIn {

                0% {
                    opacity: 0;
                    -webkit-transform: scale(0.8);
                }

                50% {
                    opacity: 1;
                    -webkit-transform: scale(1.05);
                }

                100% {
                    opacity: 1;
                    -webkit-transform: scale(1);
                }
            }

            @-moz-keyframes bounceIn {

                0% {
                    opacity: 0;
                    -moz-transform: scale(0.8);
                }

                50% {
                    opacity: 1;
                    -moz-transform: scale(1.05);
                }

                100% {
                    opacity: 1;
                    -moz-transform: scale(1);
                }
            }

            @-o-keyframes bounceIn {

                0% {
                    opacity: 0;
                    -o-transform: scale(0.8);
                }

                50% {
                    opacity: 1;
                    -o-transform: scale(1.05);
                }

                100% {
                    opacity: 1;
                    -o-transform: scale(1);
                }
            }

            @keyframes bounceIn {

                0% {
                    opacity: 0;
                    transform: scale(0.8);
                }

                50% {
                    opacity: 1;
                    transform: scale(1.05);
                }

                100% {
                    opacity: 1;
                    transform: scale(1);
                }
            }

            .bounceIn {
                -webkit-animation-name: bounceIn;
                -moz-animation-name: bounceIn;
                -o-animation-name: bounceIn;
                animation-name: bounceIn;
            }

            @-webkit-keyframes fadeIn {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }

            @-moz-keyframes fadeIn {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }

            @-o-keyframes fadeIn {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }

            @keyframes fadeIn {
                0% {
                    opacity: 0;
                }

                100% {
                    opacity: 1;
                }
            }

            .delay {
                -webkit-animation-delay: 0.30s;
                -moz-animation-delay: 0.30s;
                -o-animation-delay: 0.30s;
                animation-delay: 0.30s;
            }

            .delay-three {
                -webkit-animation-delay: 0.60s;
                -moz-animation-delay: 0.60s;
                -o-animation-delay: 0.60s;
                animation-delay: 0.60s;
            }

            .delay-two {
                -webkit-animation-delay: 1.0s;
                -moz-animation-delay: 1.0s;
                -o-animation-delay: 1.0s;
                animation-delay: 1.0s;
            }

            .delay-one {
                -webkit-animation-delay: 1.5s;
                -moz-animation-delay: 1.5s;
                -o-animation-delay: 1.5s;
                animation-delay: 1.5s;
            }

            .fadeIn {
                -webkit-animation-name: fadeIn;
                -moz-animation-name: fadeIn;
                -o-animation-name: fadeIn;
                animation-name: fadeIn;
            }

            @-webkit-keyframes fadeInUp {
                0% {
                    opacity: 0;
                    -webkit-transform: translateY(20px);
                }

                100% {
                    opacity: 1;
                    -webkit-transform: translateY(0);
                }
            }

            @-moz-keyframes fadeInUp {
                0% {
                    opacity: 0.4;
                    -moz-transform: translateY(20px);
                }

                100% {
                    opacity: 1;
                    -moz-transform: translateY(0);
                }
            }

            @-o-keyframes fadeInUp {
                0% {
                    opacity: 0;
                    -o-transform: translateY(20px);
                }

                100% {
                    opacity: 1;
                    -o-transform: translateY(0);
                }
            }

            @keyframes fadeInUp {
                0% {
                    opacity: 0;
                    transform: translateY(20px);
                }

                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .fadeInUp {
                -webkit-animation-name: fadeInUp;
                -moz-animation-name: fadeInUp;
                -o-animation-name: fadeInUp;
                animation-name: fadeInUp;
            }

            @-webkit-keyframes fadeInDown {
                0% {
                    opacity: 0;
                    -webkit-transform: translateY(-20px);
                }

                100% {
                    opacity: 1;
                    -webkit-transform: translateY(0);
                }
            }

            @-moz-keyframes fadeInDown {
                0% {
                    opacity: 0;
                    -moz-transform: translateY(-20px);
                }

                100% {
                    opacity: 1;
                    -moz-transform: translateY(0);
                }
            }

            @-o-keyframes fadeInDown {
                0% {
                    opacity: 0;
                    -o-transform: translateY(-20px);
                }

                100% {
                    opacity: 1;
                    -o-transform: translateY(0);
                }
            }

            @keyframes fadeInDown {
                0% {
                    opacity: 0;
                    transform: translateY(-20px);
                }

                100% {
                    opacity: 1;
                    transform: translateY(0);
                }
            }

            .fadeInDown {
                -webkit-animation-name: fadeInDown;
                -moz-animation-name: fadeInDown;
                -o-animation-name: fadeInDown;
                animation-name: fadeInDown;
            }

            @-webkit-keyframes fadeInLeft {
                0% {
                    opacity: 0;
                    -webkit-transform: translateX(-20px);
                }

                100% {
                    opacity: 1;
                    -webkit-transform: translateX(0);
                }
            }

            @-moz-keyframes fadeInLeft {
                0% {
                    opacity: 0;
                    -moz-transform: translateX(-20px);
                }

                100% {
                    opacity: 1;
                    -moz-transform: translateX(0);
                }
            }

            @-o-keyframes fadeInLeft {
                0% {
                    opacity: 0;
                    -o-transform: translateX(-20px);
                }

                100% {
                    opacity: 1;
                    -o-transform: translateX(0);
                }
            }

            @keyframes fadeInLeft {
                0% {
                    opacity: 0;
                    transform: translateX(-20px);
                }

                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            .fadeInLeft {
                -webkit-animation-name: fadeInLeft;
                -moz-animation-name: fadeInLeft;
                -o-animation-name: fadeInLeft;
                animation-name: fadeInLeft;
            }

            @-webkit-keyframes fadeInRight {
                0% {
                    opacity: 0;
                    -webkit-transform: translateX(20px);
                }

                100% {
                    opacity: 1;
                    -webkit-transform: translateX(0);
                }
            }

            @-moz-keyframes fadeInRight {
                0% {
                    opacity: 0;
                    -moz-transform: translateX(20px);
                }

                100% {
                    opacity: 1;
                    -moz-transform: translateX(0);
                }
            }

            @-o-keyframes fadeInRight {
                0% {
                    opacity: 0;
                    -o-transform: translateX(20px);
                }

                100% {
                    opacity: 1;
                    -o-transform: translateX(0);
                }
            }

            @keyframes fadeInRight {
                0% {
                    opacity: 0;
                    transform: translateX(20px);
                }

                100% {
                    opacity: 1;
                    transform: translateX(0);
                }
            }

            .fadeInRight {
                -webkit-animation-name: fadeInRight;
                -moz-animation-name: fadeInRight;
                -o-animation-name: fadeInRight;
                animation-name: fadeInRight;
            }

            .fadeOutDown {
                -webkit-animation-name: fadeOutDown;
                -moz-animation-name: fadeOutDown;
                -o-animation-name: fadeOutDown;
                animation-name: fadeOutDown;
            }

            @-webkit-keyframes fadeOutLeft {
                0% {
                    opacity: 1;
                    -webkit-transform: translateX(0);
                }

                100% {
                    opacity: 0;
                    -webkit-transform: translateX(-20px);
                }
            }

            @-moz-keyframes fadeOutLeft {
                0% {
                    opacity: 1;
                    -moz-transform: translateX(0);
                }

                100% {
                    opacity: 0;
                    -moz-transform: translateX(-20px);
                }
            }

            @-o-keyframes fadeOutLeft {
                0% {
                    opacity: 1;
                    -o-transform: translateX(0);
                }

                100% {
                    opacity: 0;
                    -o-transform: translateX(-20px);
                }
            }

            @keyframes fadeOutLeft {
                0% {
                    opacity: 1;
                    transform: translateX(0);
                }

                100% {
                    opacity: 0;
                    transform: translateX(-20px);
                }
            }

            @-webkit-keyframes fadeOut {
                0% {
                    opacity: 1;
                }

                100% {
                    opacity: 0;
                }
            }

            @-moz-keyframes fadeOut {
                0% {
                    opacity: 1;
                }

                100% {
                    opacity: 0;
                }
            }

            @-o-keyframes fadeOut {
                0% {
                    opacity: 1;
                }

                100% {
                    opacity: 0;
                }
            }

            @keyframes fadeOut {
                0% {
                    opacity: 1;
                }

                100% {
                    opacity: 0;
                }
            }

            .animated.fadeOut {
                -webkit-animation-name: fadeOut;
                -moz-animation-name: fadeOut;
                -o-animation-name: fadeOut;
                animation-name: fadeOut;
            }

            .animated.fadeOutLeft {
                -webkit-animation-name: fadeOutLeft;
                -moz-animation-name: fadeOutLeft;
                -o-animation-name: fadeOutLeft;
                animation-name: fadeOutLeft;
            }
        `}</style>
        <div className={`animated ${classes ? classes : "fadeInUp"}`}>
          {children}
        </div>
      </div>
    );
  }
}

export default AnimateOnce;

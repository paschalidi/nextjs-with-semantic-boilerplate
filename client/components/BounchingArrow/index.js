/**
 *
 * BounchingArrow
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import ComponentSvg from '../ComponentSvg/index';
import Arrow from '../../static/svgs/arrowGrey.svg';
import ArrowPixeled from '../../static/svgs/arrow.svg';

class BounchingArrow extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div>
        {/* language=CSS */}
        <style jsx>{`

            .bounch {
                animation: MoveUpDown 1.5s linear infinite;
                position: absolute;
                left: 48%;
                margin-bottom: 10vw;
            }

            @keyframes MoveUpDown {
                0% {
                    bottom: 0;
                }
                40% {
                    bottom: 20px;
                }
                55% {
                    bottom: 0px;
                }
                70% {
                    bottom: 10px;
                }
                100% {
                    bottom: 0;
                }
            }`}</style>
        <div className="bounch">
          <ComponentSvg width={50} isRotated90 children={<Arrow />} />
        </div>
      </div>
    );
  }
}

export default BounchingArrow;

/**
 *
 * Posponer
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import {} from 'semantic-ui-react';
import VisibilitySensor from 'react-visibility-sensor';
import AnimateOnce from '../AnimateOnce/index';

class Posponer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    timer: 0,
    waitElement: <div />,
  };

  constructor(props) {
    super(props);
    this.state = {
      secondsElapsed: 0,
    };
  }

  componentIsVisible() {
    setTimeout(() => {
      let secondsElapsed = this.state.secondsElapsed + 0.1
      this.setState({ secondsElapsed })
    }, 100);
  }

  render() {
    return (
      <div>
        <VisibilitySensor>
          {
            ({ isVisible }) => {
              isVisible ? this.componentIsVisible() : null;
              return (
                isVisible && this.state.secondsElapsed > this.props.timer
                  ?
                  this.props.children
                  :
                  <div style={{ visibility: 'hidden' }}>
                    {this.props.children}
                  </div>
              )
            }
          }
        </VisibilitySensor>
      </div>
    );
  }
}

export default Posponer;
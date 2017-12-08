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


class Posponer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    timer: 0,
    waitElement: <div />,
    secondsElapsed: 0

  };

  constructor(props) {
    super(props);
    this.state = {
      timer: props.timer,
      secondsElapsed: props.secondsElapsed
    };
  }

  componentIsVisible() {
    let secondsElapsed = 0;
    setTimeout(() => {
      secondsElapsed = this.state.secondsElapsed + 0.1;
      this.setState({ secondsElapsed });
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
                isVisible && this.state.secondsElapsed > this.state.timer
                  ?
                  this.props.children
                  :
                  <div style={{ visibility: 'hidden' }}>
                    {this.props.children}
                  </div>
              );
            }
          }
        </VisibilitySensor>
      </div>
    );
  }
}

export default Posponer;

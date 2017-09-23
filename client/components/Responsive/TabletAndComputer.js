/**
 *
 * Responsive
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

//todo warning needs to be fixed
// to fix read this
// https://github.com/contra/react-responsive/blob/master/README.md
// and this
// https://github.com/contra/react-responsive/issues/42
import React from 'react';
import Responsive from 'react-responsive';

class TabletAndComputer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <Responsive minWidth={769}>{children}</Responsive>
    );
  }
}

export default TabletAndComputer;

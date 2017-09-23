/**
 *
 * Responsive
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Responsive from 'react-responsive';

class TabletAndComputer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <Responsive minWidth={993}>{children}</Responsive>
    );
  }
}

export default TabletAndComputer;

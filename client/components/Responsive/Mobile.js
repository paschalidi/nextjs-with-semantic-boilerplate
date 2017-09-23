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

class Mobile extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;
    return (
      <Responsive maxWidth={768} >{children}</Responsive>
    );
  }
}

export default Mobile;

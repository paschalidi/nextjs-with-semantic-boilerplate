/**
 *
 * Loading
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

class Loading extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    if (!this.props.isLoading) {
      return <div></div>;
    }
    return (
      <Dimmer inverted active>
        <Loader />
      </Dimmer>
    );
  }
}

export default Loading;

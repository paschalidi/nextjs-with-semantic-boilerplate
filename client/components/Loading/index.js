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
import Logo from '../../assets/logo.svg';
class Loading extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    if (!this.props.isLoading) {
      return (
        <div className="none">
          NoLoading
          <style jsx> {` .none { display: none; } `} </style>
        </div>
      );
    }
    return (
      <Dimmer active>
        <Loader size="medium">Loading Vimcar</Loader>
      </Dimmer>
    );
  }
}

export default Loading;

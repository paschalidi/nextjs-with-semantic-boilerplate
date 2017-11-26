/**
*
* RevealText
*
*/
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';


import {} from 'semantic-ui-react';

class RevealText extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    hasColorPrime: false,
  };
  render() {
    const { } = this.props.contentfulData;

    return (
      <div>
        <style jsx>{``}</style>
        <p>RevealText!!</p>
      </div>
    );
  }
}


export default RevealText;

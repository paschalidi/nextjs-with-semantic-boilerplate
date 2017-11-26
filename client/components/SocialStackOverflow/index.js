/**
 *
 * SocialEmail
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Icon } from 'semantic-ui-react';

class SocialStackOverflow extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <a style={{ margin: '0 auto' }} href={"https://stackoverflow.com/users/6013423/paschalidis-christos"} target="_blank">
        <Icon color="black" fitted size={this.props.size} name="stack overflow" />
      </a>


    );
  }
}

export default SocialStackOverflow;

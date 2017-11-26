/**
 *
 * SocialGithub
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Icon } from 'semantic-ui-react';
import ComponentSvg from '../ComponentSvg/index';

class SocialGithub extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <a href={"https://github.com/paschalidi"} target="_blank">
        <Icon color="black" fitted size={this.props.size} name="github alternate" />
      </a>

    );
  }
}

export default SocialGithub;

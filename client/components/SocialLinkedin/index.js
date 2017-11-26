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

class SocialLinkedin extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <a
        target="_blank"
        style={{ margin: '0 auto' }}
        href={"https://www.linkedin.com/in/christos-paschalidis/"}
      >
        <Icon color="black" fitted size={this.props.size} name="linkedin" />
      </a>


    );
  }
}

export default SocialLinkedin;

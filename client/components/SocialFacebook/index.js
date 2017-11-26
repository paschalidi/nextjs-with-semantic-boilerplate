/**
 *
 * SocialFacebook
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Icon } from 'semantic-ui-react';
import ComponentSvg from '../ComponentSvg/index';

class SocialFacebook extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <a style={{margin: '0 auto'}}href={"https://www.facebook.com/"} target="_blank">
        <Icon color="black" fitted size={this.props.size} name="facebook f" />
      </a>
    );
  }
}

export default SocialFacebook;

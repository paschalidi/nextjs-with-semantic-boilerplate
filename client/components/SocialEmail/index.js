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

import ComponentSvg from '../ComponentSvg/index';

class SocialEmail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    email: "paschalidi@outlook.com",
  };

  render() {
    return (
      <div>
        <a
          style={{ color: 'black !importnat' }}
          href={`mailto:${this.props.email}?Subject=Hallo%20Christos`}
          target="_top"
        >
          <Icon color="black" fitted size={this.props.size} name="mail outline" />
        </a>
      </div>

    );
  }
}

export default SocialEmail;

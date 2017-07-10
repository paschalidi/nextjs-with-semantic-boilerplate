/**
 *
 * TextLeft
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import { Button, Image } from 'semantic-ui-react';

class TextLeft extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    title: null,
    subtitle: null,
    anchor: null,
    images: null,
  };

  renderImages(images) {
    if (!images) return <div></div>
    return images.map((image, index) => <Image key={index} src={image} size="mini" />)
  }

  render() {
    const { title, subtitle, anchor, images } = this.props;

    return (
      <div >
        <div className="image-block text-pad-left">
          <div className="floating-image-content text-pad-left">
            <Image.Group size="mini">
              {this.renderImages(["http://placehold.it/50x50", "http://placehold.it/50x50", "http://placehold.it/50x50", "http://placehold.it/50x50",])}
            </Image.Group>
          </div>
        </div>
        <div className="text-block text-pad-left">
          <div className="floating-text-content">
            <h1>{title}</h1>
            <div className="color-sec">{subtitle}</div>
            {anchor ? <Button>{anchor}</Button> : <span></span>}
          </div>
        </div>
      </div>
    );
  }
}

export default TextLeft;

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
  renderImages(images) {
    if (!images) return <div></div>
    return images.map(image => <Image src={image} size="mini" />)
  }

  renderText({ title, subtitle, anchor, prime, images }) {
    if (prime) {
      return (
        <div>
          <div className="image-block pad-left">
            <div className="floating-image-content pad-left">
              <Image.Group size="mini">
                {this.renderImages(["http://placehold.it/50x50", "http://placehold.it/50x50", "http://placehold.it/50x50"])}
              </Image.Group>
            </div>
          </div>

          <div className="text-block pad-left pad-top">
            <div className="floating-text-content">
              <h1>{title}</h1>
              <div className="color-sec">{subtitle}</div>
              <Button>{anchor}</Button>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="image-block pad-left">
          <div className="floating-image-content pad-left">
            <Image.Group size="mini">
              {this.renderImages(["http://placehold.it/50x50", "http://placehold.it/50x50", "http://placehold.it/50x50", "http://placehold.it/50x50",])}
            </Image.Group>
          </div>
        </div>
        <div className="text-block pad-left">
          <div className="floating-text-content">
            <h1>{title}</h1>
            <div className="color-sec">{subtitle}</div>
            <Button>{anchor}</Button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderText(this.props)}
      </div>
    );
  }
}

export default TextLeft;

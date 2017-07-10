/**
 *
 * SectionTop
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React, { PropTypes } from 'react';

import { Grid, Image } from 'semantic-ui-react';

class SectionTop extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {};

  static defaultProps = {
    contentfulData: {
      sectionTitle: "contentful sectionTitle default",
      title: "contentful title default",
      subtitle: "contentful subtitle default",
      imageArray: null,
      anchor: "contentful anchor default",
    },
  };

  renderImages(images) {
    if (!images) return <div></div>
    return images.map((image, index) => <Image key={index} src={image} size="mini" />)
  }

  render() {
    const { title, sectionTitle, imageArray, subtitle, anchor } = this.props.contentfulData;

    return (
      <div className="background-color-prime" style={{ paddingTop: '10em' }}>
        <style jsx>{``}</style>
        <Grid container centered stretched stackable textAlign="center">
          <Grid.Row columns={1}><h5 className="color-sec">{sectionTitle}</h5></Grid.Row>
          <Grid.Row columns={1}><h1>{title}</h1></Grid.Row>
          <Grid.Column textAlign="center" width={7}>
            <p className="color-sec">{subtitle}</p>
          </Grid.Column>
          {imageArray
            ?
            <Grid.Row columns={1}>
              <Image.Group size="tiny">
                {this.renderImages(imageArray)}
              </Image.Group>
            </Grid.Row>
            :
            <span></span>
          }
          <Grid.Row columns={1}> <a>{anchor}</a> </Grid.Row>

          <Grid.Row>
            <Grid.Column width={10}>
              <Image src="http://placehold.it/520x500" />
            </Grid.Column>
            <Grid.Column width={6}>
              <Image src="http://placehold.it/520x500 " />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SectionTop;

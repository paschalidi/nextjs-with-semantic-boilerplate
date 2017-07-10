/**
 *
 * SectionMiddle
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import Text from '../CenteredText';
import { Grid, Image, List, Icon } from 'semantic-ui-react';

class SectionMiddle extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    hasOnlyImage: false,
    hasColorPrime: false,
    computerWidth: 10,
    contentfulData: {
      image: null,
      listContent: null,
    }
  };

  renderList(listContent) {
    return Object.keys(listContent).map(function (key, index) {
      return (
        <List.Item>
          <Icon key={index} size="big" color="blue" name="database" />
          <List.Content>
            <List.Header className="color-prime-s">{listContent[key].title}</List.Header>
            <List.Description className="color-prime-s">{listContent[key].text}</List.Description>
          </List.Content>
        </List.Item>
      )
    });
  }

  render() {
    const { image, listContent } = this.props.contentfulData;
    const { hasOnlyImage, hasColorPrime, computerWidth } = this.props;

    if (hasOnlyImage) {
      return (
        <div className="background-color-prime" style={{ paddingTop: '8em' }}>
          <div className={hasColorPrime ? "background-color-prime" : "background-color-sec"}>
            <Image src={image} fluid />
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="background-color-prime" style={{ paddingTop: '8em' }}>
          <Grid
            centered
            stretched
            stackable
            textAlign="left"
            justified
          >
            <Grid.Column
              mobile={16}
              tablet={computerWidth}
              computer={computerWidth}
            >
              <div className={hasColorPrime ? "background-color-prime" : "background-color-sec"}>
                <Image src={image} fluid />
              </div>
            </Grid.Column>

            <Grid.Column
              verticalAlign="middle"
              mobile={16}
              tablet={16 - computerWidth}
              computer={16 - computerWidth}
            >
              <div className={hasColorPrime ? "background-color-prime" : "background-color-sec"}>
                <List relaxed>
                  {this.renderList(listContent)}
                </List>
              </div>
            </Grid.Column>
          </Grid>
        </div>
      );
    }
  }
}

export default SectionMiddle;

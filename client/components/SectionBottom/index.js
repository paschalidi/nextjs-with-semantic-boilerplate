/**
 *
 * SectionBottom
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import { Grid, Image, Button } from 'semantic-ui-react';

class SectionBottom extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static defaultProps = {
    contentfulData: {
      anchor: null,
      anchor01: null,
      paragraph: null,
      buttonText: null,
    }
  };

  render() {
    const { anchor, anchor01, paragraph, buttonText } = this.props.contentfulData;

    return (
      <div className="background-color-prime">
        <style jsx>{``}</style>
        <Grid container centered stackable textAlign="center">
          <Grid.Row textAlign="center" columns={1}>
            <Grid.Column width={10}><p className="color-sec">{paragraph}</p></Grid.Column>
          </Grid.Row>
          {buttonText ? <Button>{buttonText}</Button> : <span></span>}
          <Grid.Row only="tablet computer" centered columns={2}>
            <Grid.Column textAlign="center" width={6}> <a> {anchor} </a> </Grid.Column>
            <Grid.Column textAlign="center" width={6}> <a> {anchor01} </a> </Grid.Column>
          </Grid.Row>
          <Grid.Row only="mobile" centered columns={2}>
            <Grid.Column textAlign="center" width={10}>
              {anchor ? <Button> {anchor} </Button> : <span></span>}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default SectionBottom;

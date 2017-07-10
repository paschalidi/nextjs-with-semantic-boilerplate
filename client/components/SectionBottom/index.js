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
    anchor: null,
    anchor01: null,
    paragraph: null,
    buttonText: null,
  };

  render() {
    const { anchor, anchor01, paragraph, buttonText } = this.props;

    return (
      <div className="background-color-prime">
        <style jsx>{``}</style>
        <Grid container centered stackable textAlign="center">
          <Grid.Row columns={1}><p className="color-sec">{paragraph}</p></Grid.Row>
          {buttonText ? <Button>{buttonText}</Button> : <span></span>}
          <Grid.Row centered columns={2}>
            <Grid.Column width={3}> <a> {anchor} </a> </Grid.Column>
            <Grid.Column width={3}> <a> {anchor01} </a> </Grid.Column>
          </Grid.Row> </Grid>
      </div>
    );
  }
}

export default SectionBottom;

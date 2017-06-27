/**
 *
 * TripleContainer
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import * as contentful from 'contentful';
import { SPACE_ID, ACCESS_TOKEN, ENTRY_ID, IMAGE1_ID, IMAGE2_ID, IMAGE3_ID } from './constants';

import { Grid, Image } from 'semantic-ui-react';

class TripleContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { children } = this.props;

    return (
      <div>
        <Grid container centered stretched stackable textAlign="left" columns={3}>

          {children}

        </Grid>
      </div>
    );
  }
}

export default TripleContainer;

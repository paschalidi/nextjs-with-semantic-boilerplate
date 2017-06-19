/*
 *
 * Footer
 *
 */
/* eslint-disable import/first */
import React from 'react';

import { connect } from 'react-redux';
import * as actions from './actions';

import * as contentful from 'contentful';
import { SPACE_ID, ACCESS_TOKEN } from './constants';

import { Grid, List } from 'semantic-ui-react';

export class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    // const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN, });
    // client.getEntries()
    //   .then((response) => this.props.fetchContentful(response))
    //   .catch(console.error);
    //
    // client.getEntry(SUPPORT)
    //   .then(function (entry) {
    //     // logs the entry metadata
    //
    //     console.log('entry.sys')
    //     console.log(entry.sys)
    //
    //     // logs the field with ID title
    //     console.log(entry.fields.productName)
    //   })productName

    return (
      <div className="footer footer-font-color">
        <div className="top-bottom-padding">
          <Grid container stackable columns={6}>
            <Grid.Row>

              <Grid.Column>
                <List verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Header className="footer-font-color">Header</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                <List link animated verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Home</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Fleet Management</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Magazine</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Support</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Header className="footer-font-color">Header</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                <List link animated verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Home</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Fleet Management</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Magazine</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Support</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Header className="footer-font-color">Header</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                <List link animated verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Home</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Fleet Management</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Magazine</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Support</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <List verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Header className="footer-font-color">Header</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                <List link animated verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Home</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Fleet Management</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Magazine</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a className="footer-font-color">Support</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column floated="right"> 6 </Grid.Column>
            </Grid.Row>
          </Grid>
        </div >

        <div className="top-bottom-padding-sm">
          <Grid container stackable columns={5}>
            <Grid.Row>
              <Grid.Column width={8}>
                <List link celled inverted horizontal>
                  <List.Item><a>About us</a></List.Item>
                  <List.Item><a>Contact</a></List.Item>
                  <List.Item><a>Support</a></List.Item>
                </List>
              </Grid.Column>

              <Grid.Column floated="right">
                <List link floated="right" celled inverted horizontal>
                  <List.Item><a>EN</a></List.Item>
                  <List.Item><a>DE</a></List.Item>
                  <List.Item><a>SP</a></List.Item>
                </List>

              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>

        <style>{`
          .footer-font-color{
            color: #fbfcfc !important;
          }
          .footer{
            height: auto;
            background: #313541;
          }
          .top-bottom-padding{
            padding : 5.5em 0 8em 0;
          }
         .top-bottom-padding-sm{
            padding : 1.5em;
          }
          .divider-padding{
            padding : 1.5em 0;
          }
        `} </style>

      </div>
    );
  }
}

function mapStateToProps(state) {
  //const {} = state;
  return {};
}

export default connect(mapStateToProps, actions)(Footer);

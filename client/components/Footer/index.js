/*
 *
 * Footer
 *
 */
/* eslint-disable import/first */
import React from 'react';

import * as contentful from 'contentful';
import { SPACE_ID, ACCESS_TOKEN } from './constants';

import { Grid, List, Icon} from 'semantic-ui-react';

export default class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
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
      <div className="footer">
        <div className="top-bottom-padding">
          <Grid container stackable columns={5}>
            <Grid.Row>
              <Grid.Column>
                <List inverted verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Header>Header</List.Header>
                    </List.Content>
                  </List.Item>
                </List>
                <List link animated inverted verticalAlign="middle">
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a>Home</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a>Fleet Management</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a>Magazine</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Content>
                      <List.Description>
                        <a>Support</a>
                      </List.Description>
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>


              <Grid.Column floated="right">
                <List verticalAlign="middle">
                  <List.Item>
                    <List.Icon name="phone" />
                    <List.Content className="nowrap">+49 30 55579852</List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="mail outline" />
                    <List.Content className="nowrap">kontakt@vimcar.com</List.Content>
                  </List.Item>
                </List>
                <br />
                <br />
                <List link horizontal inverted verticalAlign="middle">
                  <List.Item as="a">
                    <List.Icon name="facebook f" />
                  </List.Item>
                  <List.Item as="a">
                    <List.Icon name="twitter" />
                  </List.Item>
                  <List.Item as="a">
                    <List.Icon name="google plus" />
                  </List.Item>
                </List>
              </Grid.Column>
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
          .footer-inverted-color{
            color: rgba(255,255,255,.9);
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
          .nowrap {
            white-space: nowrap ;
          }
        `} </style>

      </div>
    );
  }
}

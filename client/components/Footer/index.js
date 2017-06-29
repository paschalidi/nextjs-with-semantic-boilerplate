/*
 *
 * Footer
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */
import React from 'react';

import { Grid, List, Icon } from 'semantic-ui-react';

export default class Footer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="footer">

        <Grid container stackable columns={5}>
          <Grid.Row className="pad-top-s" only="tablet computer">
            <Grid.Column>
              <List inverted verticalAlign="middle">
                <List.Item>
                  <List.Content>
                    <List.Header>Header</List.Header>
                  </List.Content>
                </List.Item>
              </List>
              <List link inverted verticalAlign="middle">
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

            <Grid.Column width={4} floated="right">
              <List floated="right" className="nowrap" link inverted horizontal>
                <List.Item><Icon name="phone" /></List.Item>
                <List.Item>+49 1639 68 30 10</List.Item>
              </List>

              <List floated="right" className="nowrap" link inverted horizontal>
                <List.Item><Icon name="mail outline" /></List.Item>
                <List.Item>kontakt@vimcar.com</List.Item>
              </List>
              <br />
              <br />
              <br />
              <br />
              <br />
              <List floated="right" className="padding-top nowrap" link inverted horizontal>
                <List.Item>
                  <List.Content>
                    <List.Header as="a" className="list-header-pad-s">
                      <Icon name="facebook f" />
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item >
                  <List.Content>
                    <List.Header as="a" className="list-header-pad-s">
                      <Icon name="twitter" />
                    </List.Header>
                  </List.Content>
                </List.Item>
                <List.Item >
                  <List.Content>
                    <List.Header as="a" className="list-header-pad-s">
                      <Icon name="google plus" />
                    </List.Header>
                  </List.Content>
                </List.Item>
              </List>

            </Grid.Column>
          </Grid.Row>

          <Grid.Row className="pad-top-s" only="computer tablet">
            <Grid.Column width={8}>
              <List link divided inverted horizontal>
                <List.Item><a>About us</a></List.Item>
                <List.Item><a>Contact</a></List.Item>
                <List.Item><a>Support</a></List.Item>
              </List>
            </Grid.Column>

            <Grid.Column floated="right">
              <List link floated="right" divided inverted horizontal>
                <List.Item><a>EN</a></List.Item>
                <List.Item><a>DE</a></List.Item>
                <List.Item><a>SP</a></List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Grid divided inverted stackable columns={4}>
          <Grid.Row
            inverted
            only="mobile"
            textAlign="center"
            className="footer-inverted-color"
          >
            <Grid.Column >
              <List link inverted horizontal>
                <List.Item>
                  <List.Header> MENU </List.Header>
                </List.Item>

                <List.Item><a>Impressum</a></List.Item>
                <List.Item><a>AGB</a></List.Item>
                <List.Item><a>Datenchutz</a></List.Item>
                <List.Item><a>Kontakt</a></List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List link inverted verticalAlign="middle">
                <List.Item className="sm-pad-s">
                  <List.Content>
                    <List.Header className="list-header-pad-s"> <Icon name="phone" /> </List.Header>
                    <List.Description><b>+49 1639 6830 11</b></List.Description>
                  </List.Content>
                </List.Item>
                <List.Item className="sm-pad-s">
                  <List.Content>
                    <List.Header className="list-header-pad-s"> <Icon name="mail outline" />
                    </List.Header>
                    <List.Description><b>kontakt@vimcar.de</b></List.Description>
                  </List.Content>
                </List.Item>
                <List.Item className="sm-pad-s">
                  <List.Content>
                    <List.Header className="list-header-pad-s"> <Icon name="facebook f" />
                    </List.Header>
                    <List.Description><b>We like you. You like us.</b></List.Description>
                  </List.Content>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column>
              <List link inverted verticalAlign="middle">
                <List.Item className="sm-pad-s">
                  <List.Content><List.Description><a>BLOG</a></List.Description></List.Content>
                </List.Item>
                <List.Item className="sm-pad-s">
                  <List.Content><List.Description><a>PRESSE</a></List.Description></List.Content>
                </List.Item>
                <List.Item className="sm-pad-s">
                  <List.Content><List.Description><a>IMOPRESSUM</a></List.Description></List.Content>
                </List.Item>
                <List.Item className="sm-pad-s">
                  <List.Content><List.Description><a>JOBS</a></List.Description></List.Content>
                </List.Item>
                <List.Item className="sm-pad-s">
                  <List.Content><List.Description><a>PARTNER</a></List.Description></List.Content>
                </List.Item>
                <List.Item className="sm-pad-s">
                  <List.Content><List.Description><a>KONTAKT</a></List.Description></List.Content>
                </List.Item>
              </List>
            </Grid.Column>

            <Grid.Column >
              <List inverted verticalAlign="middle">
                <List.Item>
                  <List.Content>
                    <List.Header>&#169; 2017 Vimcar</List.Header>
                  </List.Content>
                </List.Item>
              </List>

              <List link inverted horizontal>
                <List.Item><a>Impressum</a></List.Item>
                <List.Item><a>AGB</a></List.Item>
                <List.Item><a>Datenchutz</a></List.Item>
                <List.Item><a>Kontakt</a></List.Item>
              </List>
            </Grid.Column>

          </Grid.Row>
        </Grid>
        <style>{`
          .footer-inverted-color{
            color: rgba(255,255,255,.9) !important;
          }
          .footer{
            height: auto;
            background: #313541;
          }
          .nowrap {
            white-space: nowrap ;
          }
        `} </style>

      </div>
    );
  }
}

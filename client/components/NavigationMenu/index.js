/*
 *
 * NavigationMenu
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Link from 'next/link'
import Router from 'next/router'

import * as contentful from 'contentful'
import { SPACE_ID, ACCESS_TOKEN, LOGO } from './constants';

import { Menu, Segment, Container, Button } from 'semantic-ui-react';

export default class NavigationMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  constructor(props) {
    super(props);
    this.state = {
      logoUrl: null,
      navigationMenuItems: [],
    }
  }

  componentWillMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN, });

    client.getEntries()
      .then((response) => this.setState({ navigationMenuItems: response.items }))
      .catch(console.error);

    client.getAsset(LOGO)
      .then((asset) => this.setState({ logoUrl: `https:${asset.fields.file.url}` }))
      .catch(console.error)
  }

  renderMenuItems(items, activeItem) {
    return items.map((key, index) => {
      const value = key.fields.text;
      if (value)
        if (index === 0)
          return (
            <Link key={index} href='/'>
              <Menu.Item className="right"
                         name={value}
                         active={activeItem === { value }}
                         onClick={this.handleItemClick}
                         onMouseEnter={() => {
                           Router.prefetch('/');
                           console.log('prefetching /!')
                         }}>
                {value}
              </Menu.Item>
            </Link>
          );
        else
          return (
            <Link key={index} href='/about'>
              <Menu.Item name={value}
                         active={activeItem === { value }}
                         onClick={this.handleItemClick}
                         onMouseEnter={() => {
                           Router.prefetch('/about');
                           console.log('prefetching /about!')
                         }}>

                {value}
              </Menu.Item>
            </Link>
          )
    })
  }

  render() {
    const { activeItem, navigationMenuItems, logoUrl } = this.state;
    return (
      <div>
        <Segment className="no-round-corner">
          <Menu size="large" stackable secondary>
            <Container>

              <Menu.Item name="logo">
                <img role="presentation" src={logoUrl} />
                <div className="float-right">VIMCAR</div>
              </Menu.Item>


              {this.renderMenuItems(navigationMenuItems, activeItem)}

              <Menu.Item className="right">
                <Button>LOGIN</Button>
              </Menu.Item>
            </Container>
          </Menu>
        </Segment>
        <style>{`
          .no-round-corner {
            border-radius: 0px !important;
          }
          .fix-logo-width{
            width: 125px !important;
          }
          .ui.secondary.menu a.logo-item:hover{
                background: transparent !important;
          }
          .float-right{
            color: #1f9ac1;
            font-size: 30px;
            padding-left: 0.5em;
          }
        `}</style>
      </div>

    );
  }
}
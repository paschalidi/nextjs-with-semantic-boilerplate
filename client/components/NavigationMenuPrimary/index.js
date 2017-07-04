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
import { SPACE_ID, ACCESS_TOKEN, LOGO } from '../../contentful/navigationMenu';

import { Menu, Button, Container } from 'semantic-ui-react';

class NavigationMenuPrimary extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {}
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  renderMenuItems(items, activeItem) {
    return items.map((key, index) => {
      if (index === 0)
        return (
          <Link key={index} href="/about">
            <Menu.Item
              className="right"
              name={key}
              active={activeItem === { key }}
              onClick={this.handleItemClick}
              onMouseEnter={() => {
                Router.prefetch(`/${key}`);
                console.log(`Prefetching /${key}!`)
              }}>
              {key.toUpperCase()}
            </Menu.Item>
          </Link>
        );
      else
        return (
          <Link key={index} href="/">
            <Menu.Item
              as="a"
              name={key}
              active={activeItem === { key }}
              onClick={this.handleItemClick}
              onMouseEnter={() => {
                Router.prefetch(`/${key}`);
                console.log(`Prefetching /${key}!`)
              }}>

              {key.toUpperCase()}
            </Menu.Item>
          </Link>
        )

    })
  }

  componentDidMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN, });
    client.getAsset(LOGO)
      .catch(console.error)
      .then((asset) => this.setState({ logoUrl: `https:${asset.fields.file.url}` }))
  }

  render() {
    const { activeItem, logoUrl } = this.state
    const menuItems = ["fahrtenbuch", "fleet managment", "steuerberater", "magazin", "support"]
    return (
      <div>
        <Menu size="small" stackable>
          <Menu.Item name="logo">
            <img role="presentation" src={logoUrl} />
            <div className="navbar-logo">VIMCAR</div>
          </Menu.Item>

          {this.renderMenuItems(menuItems, activeItem)}

          <Menu.Item className="right">
            <Button>LOGIN</Button>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default NavigationMenuPrimary;

/*
 *
 * NavigationMenu
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Link from 'next/link';
import Router from 'next/router'

import { Menu, Container, Button } from 'semantic-ui-react';

class NavigationMenuSecondary extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: 'home' }
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

  render() {
    const { activeItem } = this.state;
    const menuItems = ["fahrtenbuch", "fleet managment", "steuerberater", "magazin", "support"]

    return (
      <div>
        <Menu className="mini-s" size="mini" inverted stackable>
          <Container>

            {this.renderMenuItems(menuItems, activeItem)}


            <Menu.Item className="right">
              <Button secondary>JEST BESTELEN</Button>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    )
  }
}

export default NavigationMenuSecondary;

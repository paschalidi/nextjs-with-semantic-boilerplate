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

import { Menu, Container, Button } from 'semantic-ui-react';

class NavigationMenuSecondary extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: 'home' }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;
    const menuItems = ["fahrtenbuch", "fleet managment", "steuerberater", "magazin", "support"]

    return (
      <div>
        <Menu className="mini-s" size="mini" inverted stackable>
          <Container>
            <Link href='/'>
              <Menu.Item
                className="right"
                name=''
                active={activeItem === ''}
                onClick={this.handleItemClick}
              >
                Home
              </Menu.Item>
            </Link>
            <Link href='/about'>
              <Menu.Item
                name='about'
                active={activeItem === 'about'}
                onClick={this.handleItemClick}
              >
                About
              </Menu.Item>
            </Link>

            <Menu.Item className="right">
              <Button secondary>LOGIN</Button>
            </Menu.Item>
          </Container>
        </Menu>
      </div>
    )
  }
}

export default NavigationMenuSecondary;

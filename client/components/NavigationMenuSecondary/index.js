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

import { Menu, Segment, Container, Button } from 'semantic-ui-react';

class NavigationMenuSecondary extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div>
        <Menu className="mini-s" size="mini" inverted stackable>
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
            <Button inverted>LOGIN</Button>
          </Menu.Item>

        </Menu>
      </div>
    )
  }
}

export default NavigationMenuSecondary;

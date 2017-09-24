/**
 *
 * NavigationMenu
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Link from 'next/link'

import { Menu } from 'semantic-ui-react';
import Headroom from 'react-headroom';

class NavigationMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Headroom>
        <Menu stackable style={{ margin: 0 }}>
          <Menu.Item>
            logo
          </Menu.Item>

          <Link prefetch href="/">
            <Menu.Item
              className={`primary-menu-item-s`}
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
          </Link>
          <Link prefetch href="/start">
            <Menu.Item
              className={`primary-menu-item-s`}
              name='start'
              active={activeItem === 'start'}
              onClick={this.handleItemClick}
            >
              Home
            </Menu.Item>
          </Link>
        </Menu>
      </Headroom>
    )
  }
}

export default NavigationMenu;

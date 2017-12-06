/**
 *
 * NavigationMenu
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import Router from 'next/router';

import Logo from '../../static/svgs/mylogo.svg';
import { Menu, Item, Grid } from 'semantic-ui-react';
import ComponentSvg from '../ComponentSvg/index';


class NavigationMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      activeItem: props.pageId.replace(/[^a-zA-Z ]/g, ''),
      lastScrollPos: 1,
      changedPos: 0,
      screenHeight: 0
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const thisPos = window.pageYOffset * 0.7;
    const isScrollingDown = thisPos > this.state.lastScrollPos;
    const changedPos = isScrollingDown !== this.state.isScrollingDown ? thisPos : this.state.changedPos;
    const screenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    this.setState({
      lastScrollPos: thisPos,
      changedPos,
      isScrollingDown,
      screenHeight
    });
  }

  handleClick(name) {
    this.setState({ activeItem: name });
    Router.push(`/${name}`).then(() => window.scrollTo(0, 0));
    Router.prefetch(`/${name}`);
  }

  render() {
    const { activeItem } = this.state;

    return (
      <div
        style={{ position: 'fixed', zIndex: 999 }}
        className="fixed-navigation"
      >
        {/* language=CSS */}
        <style>{`
            .fixed-navigation {
                width: 100%;
                position: fixed;
                overflow: hidden;
                z-index: 5;
            }


        `}</style>

        <Grid container>
          <Menu className="transparent-s" fluid stackable style={{ margin: 0 }}>
            <Item
              style={{ padding: '0.2vw 0' }}
              className={`primary-menu-item-s mouse-on-link-hover`}
              onClick={this.handleClick.bind(this, '')}
            >
              <div style={{ transform: `rotate(${this.state.lastScrollPos}deg)` }}>
                <ComponentSvg width={50} children={<Logo />} />
              </div>
              <div style={{ paddingLeft: '2vw' }}>Christos Paschalidis</div>
            </Item>

            <Menu.Item
              onClick={this.handleClick.bind(this, 'start')}
              className={`primary-menu-item-s right mouse-on-link-hover-footer`}
              name='start'
              active={activeItem === 'start'}
            >
              START
            </Menu.Item>

            <Menu.Item
              onClick={this.handleClick.bind(this, 'work')}
              className={`primary-menu-item-s mouse-on-link-hover-footer`}
              name='work'
              active={activeItem === 'work'}
            >
              WORK
            </Menu.Item>

            <Menu.Item
              className={`primary-menu-item-s mouse-on-link-hover-footer`}
              name='aboutme'
              active={activeItem === 'aboutme'}
              onClick={this.handleClick.bind(this, 'aboutme')}
            >
              ABOUT
            </Menu.Item>
            <Menu.Item
              className={`primary-menu-item-s mouse-on-link-hover-footer`}
              name='contact'
              active={activeItem === 'contact'}
              onClick={this.handleClick.bind(this, 'contact')}
            >
              CONTACT
            </Menu.Item>
          </Menu>
        </Grid>
      </div>

    );
  }
}

export default NavigationMenu;

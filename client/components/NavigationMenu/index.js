/*
 *
 * NavigationMenu
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';


import Headroom from 'react-headroom'
import { Sticky } from 'react-sticky';
import NavigationMenuSecondary from '../NavigationMenuSecondary'
import NavigationMenuPrimary from '../NavigationMenuPrimary'

class NavigationMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handlePin = (isPinned) => this.setState({ isPinned });

  constructor(props) {
    super(props);
    this.state = { isPinned: null, }
  }

  render() {
    const { isPinned } = this.state;
    return (
      <div>
        <Headroom style={{ zIndex: 3 }}
                  onPin={() => {
                    console.log("onpin")
                    this.handlePin(true)
                  }}
                  onUnpin={() => {
                    console.log("onUNpin")
                    this.handlePin(false)
                  }}>
          <NavigationMenuPrimary />
        </Headroom>

        <Sticky>
          {
            ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
              return (
                <div className="transition"
                     style={{
                       ...style,
                       zIndex: 2,
                       height: 0,
                     }}>
                  <div className={isPinned ? "pinned" : "unpinned"}>yes</div>
                  <NavigationMenuSecondary />
                </div>
              )
            }
          }
        </Sticky>
        <style>{`
          .fix-logo-width{
            width: 125px !important;
          }
          .ui.secondary.menu a.logo-item:hover{
            background: transparent !important;
          }
          .navbar-logo{
            color: #1f9ac1;
            font-size: 30px;
            padding-left: 0.5em;
          }
          .pinned {
           visibility: hidden;
           transition: 280ms;
           line-height: 63.14px;
          }
           .unpinned {
           visibility: hidden;
           transition: 280ms;
           line-height: 0em;
          }
           ` }
        </style>
      </div>
    );
  }
}

export default NavigationMenu;

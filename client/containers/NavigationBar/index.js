/**
 *
 * NavigationBar
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';
import * as actions from './actions';
import { connect } from 'react-redux';
import Headroom from 'react-headroom'
import { Sticky } from 'react-sticky';
import NavigationMenuPrimary from './NavigationMenuPrimary.js'
import NavigationMenuSecondary from './NavigationMenuSecondary.js'

export class NavigationBar extends React.Component { // eslint-disable-line react/prefer-stateless-function
  handlePin = (isPinned) => this.props.handlePin(isPinned);

  render() {
    const { isPinned } = this.props;

    return (
      <div>
        <Headroom
          pinStart={100}
          onPin={() => this.handlePin(true)}
          onUnpin={() => this.handlePin(false)} />

        <Sticky>
          {
            ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
              return (
                <div
                  style={{ ...style, height: 102.83, overflow: 'auto', zIndex: 3 }}>
                  <div className={isPinned ? "pinned" : "unpinned display-none"}>
                    <NavigationMenuPrimary />
                  </div>
                  <div>
                    <NavigationMenuSecondary />
                  </div>
                  <style>
                    {
                      `
                  .pinned {
                    line-height: 63.14px;
                    }
                  .unpinned {
                    line-height: 0px;
                   }
                   .display-none{
                     display: none;
                   }
                 `
                    }
                  </style>
                </div>
              );
            }
          }
        </Sticky>
      </div>
    );
  }
}
function mapStateToProps(state) {
  const { NavigationBarReducer } = state;
  return { isPinned: NavigationBarReducer };
}

export default connect(mapStateToProps, actions)(NavigationBar);

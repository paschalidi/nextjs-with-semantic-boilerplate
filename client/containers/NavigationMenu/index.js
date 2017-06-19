/*
 *
 * NavigationMenu
 *
 */

import React from 'react';
import Link from 'next/link'

import { connect } from 'react-redux';
import * as actions from './actions';

import * as contentful from 'contentful'
import { SPACE_ID, ACCESS_TOKEN } from './constants';

import { Menu, Segment, Container, Button } from 'semantic-ui-react';

export class NavigationMenu extends React.Component { // eslint-disable-line react/prefer-stateless-function
  state = { activeItem: 'home' };
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  renderMenuItems(items, activeItem) {
    return items.map((key, index) => {
      const value = key.fields.text;
      if (index === 0)
        return (
          <Link key={index} href='/'>
            <Menu.Item className="right"
                       name={value}
                       active={activeItem === { value }}
                       onClick={this.handleItemClick}>
              {value}
            </Menu.Item>
          </Link>
        );

      return (
        <Link key={index} href='/'>
          <Menu.Item name={value}
                     active={activeItem === { value }}
                     onClick={this.handleItemClick}>
            {value}
          </Menu.Item>
        </Link>
      )
    })
  }

  componentWillMount() {
    const client = contentful.createClient({ space: SPACE_ID, accessToken: ACCESS_TOKEN, });

    client.getEntries()
      .then((response) => this.props.fetchContentful(response))
      .catch(console.error);
  }

  render() {
    const { activeItem } = this.state;
    const { navigationMenuReducer } = this.props;
    return (
      <div>
        <Segment className="no-round-corner">
          <Menu size="large" icon stackable secondary>
            <Container>
              <Link href='/'>
                {/*todo fix logo bug*/}
                <Menu.Item className="logo-item"
                           name="logo"
                           active={activeItem === 'logo'}
                           onClick={this.handleItemClick}>
                  <img className="fix-logo-width"
                       role="presentation"
                       src="https://source.unsplash.com/300x100"
                  />
                </Menu.Item>
              </Link>

              {this.renderMenuItems(navigationMenuReducer, activeItem)}

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
        `}</style>
      </div>

    );
  }
}

function mapStateToProps(state) {
  const { navigationMenuReducer } = state;
  return { navigationMenuReducer };
}

export default connect(mapStateToProps, actions)(NavigationMenu);

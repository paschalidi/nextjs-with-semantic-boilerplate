/**
 *
 * Link
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

class Link extends React.Component { // eslint-disable-line react/prefer-stateless-function
  onClickHandler = () => {
    return (e) => {
      console.log("this.props.href")
      console.log(this.props.href)
      e.preventDefault()
      Router.push(`/${this.props.href}`)
    }
  }

  render() {
    console.log(this.props)
    return (
      <a onClick={this.onClickHandler}>
        {this.props.children}
        <style jsx>{`
        a {
          margin-right: 10px;
        }
      `}</style>
      </a>
    );
  }
}

export default Link;

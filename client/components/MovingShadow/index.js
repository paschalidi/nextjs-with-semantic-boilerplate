/**
 *
 * MovingShadow
 *
 */
/* eslint-disable import/first */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prop-types */

import React from 'react';

import {} from 'semantic-ui-react';

class MovingShadow extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      pos: { x: 0, y: 0 },
      shadow: true,
      background: null,
      text: null,
      bold: null,
    };
  }

  onMouseMove(e) {
    this.setState({ pos: { x: e.pageX, y: e.pageY } });
    this.createShadow();
  }

  createShadow() {
    if ('ontouchstart' in window == false && this.state.shadow) {
      const moveX = this.state.pos.x / -120
      const moveY = this.state.pos.y / -300
      const section = this.refs.section;
      section.style.textShadow = `${moveX}px ${-moveY}px rgba(0, 0, 0, 0.1)`;
    }
  }

  render() {
    let sectionStyle = { backgroundColor: this.state.background, color: this.state.text }
    const { children } = this.props;
    return (
      <section onMouseMove={this.onMouseMove.bind(this)} style={sectionStyle}>
        <div ref="section">
          {children}
        </div>
      </section>
    )
  }
}

export default MovingShadow;

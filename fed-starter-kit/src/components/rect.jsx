import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rect extends Component {
    static propTypes = {
      hello: PropTypes.string,
    };

    static defaultProps = {
      hello: '开发环境运行中,环境说明请参看Readme~',
    };

    constructor(props, context) {
      super(props, context);
      this.state = null;
    }
    render() {
      const rectStyle = {
        fill: 'red',
        stroke: 'black',
        strokeWidth: 5,
        opacity: 0.5,
      };
      return (
        <svg width="100%" height={`${window.innerHeight}px`} version="1.1" xmlns="http://www.w3.org/2000/svg">
          <rect
            x="20"
            y="20"
            rx="20"
            ry="20"
            width="250"
            height="200"
            style={rectStyle}
          />
          <circle
            cx="100"
            cy="100"
            r="40"
            stroke="black"
            strokeWidth="2"
            fill="red"
          />
          <ellipse
            cx="240"
            cy="100"
            rx="220"
            ry="30"
            style={{ fill: 'purple' }}
          />
          <ellipse
            cx="220"
            cy="70"
            rx="190"
            ry="20"
            style={{ fill: 'lime' }}
          />
          <ellipse
            cx="210"
            cy="45"
            rx="170"
            ry="15"
            style={{ fill: 'yellow' }}
          />
          <line
            x1="0"
            y1="0"
            x2="300"
            y2="300"
            style={{ stroke: 'rgb(99,99,99)', strokeWidth: 2 }}
          />
          <polygon
            points="220,100 300,210 170,250 123,234"
            style={{ fill: '#cccccc', stroke: '#000000', strokeWidth: 1 }}
          />
          <polyline
            points="10,0 10,20 40,20 40,40 80,40 80,60"
            style={{ fill: 'white', stroke: 'red', strokeWidth: 2 }}
          />
          <path
            d="M153 334 C153 334 151 334 151 334 C151 339 153 344 156 344 C164 344 171 339 171 334 C171 322 164 314 156 314 C142 314 131 322 131 334 C131 350 142 364 156 364 C175 364 191 350 191 334 C191 311 175 294 156 294 C131 294 111 311 111 334 C111 361 131 384 156 384 C186 384 211 361 211 334 C211 300 186 274 156 274"
            style={{ fill: 'white', stroke: 'red', strokeWidth: 2 }}
          />

        </svg>
      );
    }
}

export default Rect;

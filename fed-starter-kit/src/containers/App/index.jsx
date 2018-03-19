import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rect from '../../components/rect';

class App extends Component {
    static propTypes = {
      hello: PropTypes.string,
    };

    static defaultProps = {
      hello: '环境运行中,环境说明请参看README.md~',
    };

    constructor(props, context) {
      super(props, context);
      this.state = null;
    }
    render() {
      return (
        <div>
          <p>{this.props.hello}</p>
          <p>
            Webpack Dashboard运行在 <a target="_blank" rel="noopener noreferrer" href="http://0.0.0.0:1337">http://0.0.0.0:1337</a>
          </p>
          {/* <Rect /> */}
        </div>
      );
    }
}

export default App;

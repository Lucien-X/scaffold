import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
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
      return (
        <h1>{this.props.hello}</h1>
      );
    }
}

export default App;

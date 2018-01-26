import React, { Component } from 'react'
import PropTypes from "prop-types"

class App extends Component{
    static propTypes = {
        hello: PropTypes.string
    };

    static defaultProps = {
        hello: '如果你看到这行字，说明开发环境Running无误...' 
    };
    
    render(){
        return (
            <div>{this.props.hello}</div>
        );
    }
}

export default App;

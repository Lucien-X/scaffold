import React, { Component } from 'react'
import PropTypes from "prop-types"

class App extends Component{
    static propTypes = {
        hello: PropTypes.string
    };
    
    render(){
        return (
            <div>{this.props.hello}</div>
        );
    }
}

export default App;
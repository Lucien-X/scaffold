import './index.scss'
import React from "react"
import ReactDOM from 'react-dom'

import App from './containers/App'

const mountNode = document.getElementById('root');
ReactDOM.render(
    <App />,
    mountNode
);

// 实现JS HMR必须代码
if(module.hot){
    module.hot.accept('./containers/App',(...args)=>{
        console.log(App);
    })
}
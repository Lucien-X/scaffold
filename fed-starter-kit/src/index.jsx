import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './containers/App';
import './index.scss';

const mountNode = document.getElementById('root');
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    mountNode,
  );
};
render(App);

// Webpack Hot Module Replacement API
if (module.hot) {
  // 当App文件发生变化,触发重渲染
  module.hot.accept('./containers/App', () => { render(App); });
}

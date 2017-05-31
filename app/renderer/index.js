import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';

import { AppContainer } from 'react-hot-loader';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render(App);
  });
}

ReactDOM.render(<App />, document.getElementById('root'));

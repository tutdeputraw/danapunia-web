import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'mobx-react';
import MobxRootStore from './helpers/mobx/MobxRootStore';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...MobxRootStore}>
    <App />
  </Provider>
);

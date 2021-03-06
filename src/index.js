import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, HashRouter } from 'react-router-dom'
import './index.scss';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <Provider store={store}>
         <HashRouter>
          <App />
        </HashRouter>
    </Provider>,
  document.getElementById('todo')
);


import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from "styled-components";
import "./styles/global.scss";
import App from './App';
import {theme} from "./styles/style";
import {Provider} from "react-redux";
import {store} from "./store/index";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
      <ThemeProvider theme={theme}>
    <App />
      </ThemeProvider>
      </Provider>
  </React.StrictMode>
);


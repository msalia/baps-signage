import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {ThemeProvider} from 'react-jss';
import {RecoilRoot} from 'recoil';
import {RecoilURLSyncJSON} from 'recoil-sync';

const theme = {};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <ThemeProvider theme={theme}>
    <RecoilRoot>
      <RecoilURLSyncJSON location={{part: 'queryParams'}} />
      <App />
    </RecoilRoot>
  </ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter ,Switch} from 'react-router-dom';
import Private from '../src/components/Authentication/Private'
import  Public from '../src/components/Authentication/Public'
import Login from './signin'
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <React.Fragment>
    <BrowserRouter>
    <Switch>
        <Public path="/login" component={Login}/>
        <Private path="/" component={App} />
    </Switch>
    </BrowserRouter>
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

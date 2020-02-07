import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import { RestaurantPage } from './pages/RestaurantPage';

// ReactDOM.render(<LoginPage/>, document.getElementById('root'));
// ReactDOM.render(<Navbar/>, document.getElementById('root'));
ReactDOM.render(<RestaurantPage/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

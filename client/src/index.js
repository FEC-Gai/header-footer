import React from 'react';
import ReactDOM from 'react-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
require('./style.css');

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Footer />, document.getElementById('footer'));


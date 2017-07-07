import React, { Component } from 'react';
import './public/index.css';
import './public/App.css';
import logo from './public/logo.svg';


class Header extends Component {

  render() {

    return (

    <div className="App">
            <div className="App-header">
                 <img src={logo} className="App-logo" alt="logo" />
                       <h2>vacation-app</h2>
            </div>
                  <p className="App-intro">hi there</p>
    </div>

    );
  }
}

export default Header;

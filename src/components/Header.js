import React, { Component } from 'react';
import logo from './logo.svg'

class Header extends Component {

  render() {

    return (

    <div className="App">
       <div className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
                 <h2>vacation-app</h2>
       </div>
    </div>

    );
  }
}

export default Header;

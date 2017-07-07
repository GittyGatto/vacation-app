import React, { Component } from 'react';
import './components/public/App.css';

import Calender from './components/Calender';
import Header from './components/Header';

class App extends Component {

  render() {

    return (

    <div className='App'>

            <Header header/>

            <Calender calender/>

    </div>

    );
  }
}

export default App;

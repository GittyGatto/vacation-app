import React, {Component} from 'react';
import {Calendar, CalendarControls} from 'react-yearly-calendar';
import './components/App.css';
import './components/Calendar.css';

import Header from './components/Header';

class App extends Component {



    render() {


        function onDatePicked(date) {
            alert(date);
        }


        return (

            <div className='App'>

                <Header />

                <Calendar onPickDate={onDatePicked}/>



            </div>

        );
    }
}

export default App;

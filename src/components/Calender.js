import React, { Component } from 'react';
import EventCalendar from 'react-event-calendar';

class Calender extends Component {

  render() {

          const events = [
              {
                  start: '2017-07-20',
                  end: '2017-07-02',
                  eventClasses: 'optionalEvent',
                  title: 'test event',
                  description: 'This is a test description of an event',
              },
              {
                  start: '2017-07-19',
                  end: '2017-07-25',
                  title: 'test event',
                  description: 'This is a test description of an event',
                  data: 'you can add what ever random data you may want to use later',
              },
          ];


    return (
    <div className='App'>

    <EventCalendar month={7} year={2017} events={events} onEventClick={(target, eventData, day) => console.log(eventData)}/>


    </div>

    );
  }
}

export default Calender;

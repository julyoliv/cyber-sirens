import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Agenda() {
    const [date, setDate] = useState(new Date());
  
    return (
      <div className='app'>
        <h1 className='text-center'>Agendamento</h1>
        <div className='calendar-container'>
          
<Calendar
  onChange={setDate}
  value={date}
  maxDate={new Date(2024, 6, 30)} // will not allow date later than June 30th
  minDate={new Date()} // will not allow date before today
  
  />
        </div>
        <p className='text-center'>
          <span className='bold'>Dia selecionado:</span>{' '}
          {date.toDateString()}
        </p>


      </div>
    );
  }    
        
  
  export default Agenda
  
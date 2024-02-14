import './App.css';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Typography } from '@mui/material';

function App() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleSubmit = () => {
    const newEvent = {
      title: title,
      start: moment(startDate + ' ' + startTime, 'YYYY-MM-DD HH:mm').toDate(),
      end: moment(endDate + ' ' + endTime, 'YYYY-MM-DD HH:mm').toDate(),
      editable: false,
      deletable: false,
      draggable: false,
    };
    // setEvents([...events, newEvent]);
  };

  const localizer = momentLocalizer(moment);
  const dummyData = [
    {
      event_id: 1,
      title: "Event 1",
      start: new Date("2024/02/01 09:30"),
      end: new Date("2024/02/05 10:30"),
    },
    {
      event_id: 2,
      title: "Event 2",
      start: new Date("2024/02/06 11:30"),
      end: new Date("2024/02/08 15:30"),
    },
    {
      event_id: 3,
      title: "Event 3",
      start: new Date("2024/02/10 09:30"),
      end: new Date("2024/02/10 12:30"),
    },
    {
      event_id: 4,
      title: "Event 4",
      start: new Date("2024/02/11 13:30"),
      end: new Date("2024/02/14 12:30"),
    },
    {
      event_id: 5,
      title: "Event 5",
      start: new Date("2024/02/15 08:30"),
      end: new Date("2024/02/16 07:30"),
    },
  ];

  return (
    <div className="App">
      <div className='form'>
        <Typography variant="h4" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Schedule A Task
        </Typography>
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          label="Start Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          variant="outlined"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <TextField
          label="Start Time"
          type="time"
          variant="outlined"
          value={startTime}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setStartTime(e.target.value)}
        />
        <TextField
          label="End Date"
          type="date"
          variant="outlined"
          value={endDate}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <TextField
          label="End Time"
          type="time"
          variant="outlined"
          value={endTime}
          InputLabelProps={{ shrink: true }}
          onChange={(e) => setEndTime(e.target.value)}
        />
        <Button variant="contained" onClick={handleSubmit}>Add Event</Button>
      </div>
      <div className='calendar'>
        <Calendar
          localizer={localizer}
          events={dummyData}
          startAccessor="start"
          endAccessor="end"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        />
      </div>
    </div>
  );
}

export default App;

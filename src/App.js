import './App.css';
import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import { Typography, Select, MenuItem } from '@mui/material';

function App() {
  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [fromMonth, setFromMonth] = useState('');
  const [fromYear, setFromYear] = useState('');

  const handleFromMonthChange = (event) => {
    setFromMonth(event.target.value);
  };

  const handleFromYearChange = (event) => {
    setFromYear(event.target.value);
  };

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
      title: "Task 1",
      start: new Date("2024/02/01 09:30"),
      end: new Date("2024/02/05 10:30"),
    },
    {
      event_id: 2,
      title: "Task 2",
      start: new Date("2024/02/06 11:30"),
      end: new Date("2024/02/08 15:30"),
    },
    {
      event_id: 3,
      title: "Task 3",
      start: new Date("2024/02/10 09:30"),
      end: new Date("2024/02/10 12:30"),
    },
    {
      event_id: 4,
      title: "Task 4",
      start: new Date("2024/02/11 13:30"),
      end: new Date("2024/02/14 12:30"),
    },
    {
      event_id: 5,
      title: "Task 5",
      start: new Date("2024/02/15 08:30"),
      end: new Date("2024/02/16 07:30"),
    },
  ];



  return (
    <div className="App">
      <h1>Gantt Tracker</h1>

      <div className='calendar'>
        <Calendar
          localizer={localizer}
          events={dummyData}
          startAccessor="start"
          endAccessor="end"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        />
      </div>
      <div className='form'>
        <div className='first-form'>
          <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Add Task
          </Typography>
          <TextField
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{ height: '10' }} 
          />

          <Button variant="contained" onClick={handleSubmit}>Add</Button>
        </div>
        <div className='second-form'>
          <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Add Task Duration
          </Typography>
          <div className='second-form-content'>
            <h6>Which Task?</h6>
            <select>
              <option value={"task 1"}>task 1</option>
              <option value={"task 2"}>task 2</option>
              <option value={"task 3"}>task 3</option>
              <option value={"task 4"}>task 4</option>
              <option value={"task 5"}>task 5</option>
            </select>
            <label>Start Date</label>
            <input type='date'></input>
            <label>End Date</label>
            <input type='date'></input>
          </div>

          <Button variant="contained" onClick={handleSubmit} sx={{ width: "200px" }}>Add</Button>

        </div>
        <div className='third-form'>
          <Typography variant="h5" style={{ fontWeight: 'bold', fontSize: '20px' }}>
            Tracker Period
          </Typography>
          <div className='third-form-content'>

            <h6>From</h6>
            <select value={fromMonth} onChange={handleFromMonthChange}>
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select value={fromYear} onChange={handleFromYearChange}>
              <option value="">Select Year</option>
              {Array.from({ length: 100 }, (_, index) => (
                <option key={index} value={moment().year() - index}>{moment().year() - index}</option>
              ))}
            </select>


            <h6>To</h6>
            <select value={fromMonth} onChange={handleFromMonthChange}>
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              <option value="April">April</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select value={fromYear} onChange={handleFromYearChange}>
              <option value="">Select Year</option>
              {/* Generate options for years */}
              {Array.from({ length: 100 }, (_, index) => (
                <option key={index} value={moment().year() - index}>{moment().year() - index}</option>
              ))}
            </select>

          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

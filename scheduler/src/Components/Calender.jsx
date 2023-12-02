import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';
import Calendar from 'react-calendar';

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);

    const timeOptions = [
        { value: '08:00', label: '8:00 AM' },
        { value: '08:30', label: '8:30 AM' },
        { value: '08:45', label: '8:45 AM' },
        { value: '09:00', label: '9:00 AM' },
        { value: '12:00', label: '12:00 PM' },
        { value: '12:30', label: '12:30 PM' },
        { value: '05:00', label: '5:00 PM' },
        { value: '05:30', label: '5:30 PM' },
        { value: '08:30', label: '8:30 PM' },
    ];

    return (
        <div style={{ display: 'grid' , width:'40%', margin:'auto'}}>
            <div style={{ flex: 1 }}>
                <h2>Select Date</h2>
                <Calendar onChange={(date) => setSelectedDate(date)} value={selectedDate} />
            </div>

            <div style={{ marginLeft: '20px' }}>
                <h2>Select Time</h2>
                <Select
                    options={timeOptions}
                    value={selectedTime}
                    onChange={(time) => setSelectedTime(time)}
                    placeholder="Select a time"
                />
            </div>

            {selectedDate && selectedTime && (
                <div style={{ marginTop: '20px' }}>
                    <p>Selected Date: {selectedDate.toDateString()}</p>
                    <p>Selected Time: {selectedTime.label}</p>
                </div>
            )}
        </div>
    );
};

export default Calender;

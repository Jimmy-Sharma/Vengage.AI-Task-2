import React, { useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import Calendar from 'react-calendar';
import toast from 'react-hot-toast';
import '../Styling/Calender.css'

const Calender = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    const isSunday = selectedDate.getDay() === 0;
    const isWednesday = selectedDate.getDay() === 3;
    const isSaturday = selectedDate.getDay() === 6;

    const timeOptionsForOtherDays = [
        '8:00 AM', '8:30 AM', '8:45 AM', '9:00 AM',
        '12:00 PM', '1:00 PM', '3:00 PM', '5:30 PM', '6:30 PM'
    ];

    const timeOptionsForWedDay = [
        '8:00 AM', '8:30 AM', '8:45 AM', '9:00 AM',
        '12:00 PM', '12:30 PM', '3:00 PM', '5:30 PM', '6:30 PM'
    ];

    let timeOptions = isSunday ? [] : timeOptionsForOtherDays;
    timeOptions = isWednesday ? timeOptionsForWedDay : timeOptionsForOtherDays;

    const handleSlotClick = (time) => {
        console.log(isSunday, isWednesday, isSaturday)
        const isNotAvailableForWednesday = isWednesday && time >= '12:30 PM' && time <= '4:30 PM';
        const isNotAvailableForSaturday = isSaturday && time >= '12:00 PM' && time <= '7:00 PM';

        if (!isWednesday && !isSaturday && time >= '12:30 PM' && time <= '1:00 PM') {
            console.log('Slots not available on clicking on it');
            toast.error(`Selected time slot: ${time} is not available`, {
                style: {
                    padding: "20px 25px",
                    fontWeight: "bold",
                    borderRadius: "50px",
                },
            });
        } else if (isNotAvailableForWednesday) {
            console.log(`Selected time slot: ${time} is not available`);
            toast.error(`Selected time slot: ${time} is not available`, {
                style: {
                    padding: "20px 25px",
                    fontWeight: "bold",
                    borderRadius: "50px",
                },
            });
        } else if (isNotAvailableForSaturday) {
            console.log(`Selected time slot: ${time} is not available`);
            toast.error(`Selected time slot: ${time} is not available`, {
                style: {
                    padding: "20px 25px",
                    fontWeight: "bold",
                    borderRadius: "50px",
                },
            });
        } else {
            console.log(`Selected time slot: ${time} is available`);
            toast.success(`Selected time slot: ${time} is available`, {
                style: {
                    padding: "20px 25px",
                    fontWeight: "bold",
                    borderRadius: "50px",
                },
            });
        }
    };

    return (
        <div className="calendar-container">
            <div className="calendar-section">
                <h1>Select Date</h1>
                <Calendar onChange={(date) => setSelectedDate(date)} value={selectedDate} />
            </div>

            {isSunday ? (
                <div>
                    <div className="slots-section">
                        <h2>Selected Date: {selectedDate.toDateString()}</h2>
                    </div>
                    <div className="message-section">
                        <h3>No slots available on Sundays (Holiday)</h3>
                    </div>
                </div>
            ) : (
                selectedDate && (
                    <div className="slots-section">
                        <h2>Selected Date: {selectedDate.toDateString()}</h2>
                        {isWednesday || isSaturday ? (
                            <div>
                                <h3>Available Time Slots</h3>
                                <div className="time-buttons">
                                    {timeOptionsForWedDay.map((time, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSlotClick(time)}
                                            className={`slot-button ${isWednesday && time >= '12:30 PM' && time <= '4:30 PM' ? 'not-available' :'' } ${isSaturday && time >= '12:00 PM' && time <= '7:00 PM' ? 'not-available-saturday' : ''}`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <div>
                                <h3>Available Time Slots for other days:</h3>
                                <div className="time-buttons">
                                    {timeOptions.map((time, index) => (
                                        <button
                                            key={index}
                                            onClick={() => handleSlotClick(time)}
                                            className={`slot-button ${time >= '12:30 PM' && time <= '1:00 PM' ? 'not-available' : ''}`}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )
            )}
        </div>
    );
};

export default Calender;

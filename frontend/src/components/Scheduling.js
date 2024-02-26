import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Scheduling.css';

const Scheduling = () => {
	const [selectedDate, setSelectedDate] = useState(new Date());
	const [selectedTime, setSelectedTime] = useState('');
	const [appointmentSchedule, setAppointmentSchedule] = useState({});

	const handleDateChange = (date) => {
		setSelectedDate(date);
		// Reset selected time when the date changes
		setSelectedTime('');
	};

	const handleTimeChange = (time) => {
		setSelectedTime(time);
	};

	const handleScheduleAppointment = () => {
		if (selectedTime !== '') {
			// Perform action with selectedDate and selectedTime
			console.log('Scheduled appointment for', selectedDate, selectedTime);

			// Update appointment schedule for the selected date
			setAppointmentSchedule({
				...appointmentSchedule,
				[selectedDate.toDateString()]: [
					...(appointmentSchedule[selectedDate.toDateString()] || []),
					selectedTime,
				],
			});

			// Reset selected time
			setSelectedTime('');
		} else {
			alert('Please select a time slot.');
		}
	};

	const isTimeAvailable = (time) => {
		const appointmentHours = appointmentSchedule[selectedDate.toDateString()];
		return !appointmentHours || !appointmentHours.includes(time);
	};

	const availableTimes = ['9AM', '12PM', '3PM', '6PM'].filter(isTimeAvailable);

	return (
		<div className='calendar'>
			<h2>Schedule an Appointment</h2>
			<div>
				<Calendar
					onChange={handleDateChange}
					value={selectedDate}
					minDate={new Date()} // Prevent selecting past dates
				/>
			</div>
			<div>
				<h3>Select a Time</h3>
				{availableTimes.length === 0 ? (
					<p>Nenhum horário disponível para este dia!</p>
				) : (
					availableTimes.map((time) => (
						<button key={time} onClick={() => handleTimeChange(time)}>
							{time}
						</button>
					))
				)}
			</div>
			<div>
				<button onClick={handleScheduleAppointment}>
					Schedule Appointment
				</button>
			</div>
		</div>
	);
};

export default Scheduling;

import { useState, useEffect } from "react";
import EventsTable from "./eventsTable";

function Events() {
	const [events, setEvents] = useState([]);

	const getRequest = () => {
		fetch("http://localhost:8080/api/events")
		.then((response) => response.json())
		.then(events => {
			setEvents(events); 
			console.log('Events fetched...', events);
			});
	}

	useEffect(() => {getRequest()}, []);

	return (
		<>{events.length !== 0 ? <EventsTable data={events} getRequest={getRequest} /> : <></>}</>
	);
}

export default Events;

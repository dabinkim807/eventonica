import { useState, useEffect } from "react";
import EventCard from "./eventCard";
import CardGroup from "react-bootstrap/Card"; 

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
		<CardGroup className="Events">
			{events.map((event) => (
				<EventCard
					key={event.id}
					title={event.title}
					location={event.location}
					time={event.eventtime}
				/>
			))}
		</CardGroup>
	);
}

export default Events;

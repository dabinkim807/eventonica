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

	const toggleCards = () => {
		if (events.length === 0) {
			return <></>
		}
		// event case
		// if () {
			// return eventCard.js
			return <CardGroup className="Events">
				{events.map((event) => (
					<EventCard
						key={event.id}
						title={event.title}
						location={event.location}
						time={event.eventtime}
					/>
				))}
			</CardGroup>
		// }
		// delete case
		// if () {
			// return delete.js
			// return <QuestionCard questionSet={totalQuestions[currentQAndA]} getUserAnswer={handleUserAnswer} progress={currentQAndA+1} outOf={totalQuestions.length} />
		// }
		// return addOrEdit.js
		// return <ResultCard result={validated} changeQuestion={changeQuestion} />
	}


	return (
		<div>{toggleCards()}</div>
	);
}

export default Events;

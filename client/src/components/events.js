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

	// post request
	const postRequest = (input) => {
		fetch(`http://localhost:8080/api/events`, {
			method: "POST",
			headers: {
				"Content-type": "application/JSON"
			},
			// body: JSON.stringify({ question: totalQuestions[currentQAndA].question, answer: selectedAnswer })
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				// setValidated(result);

				// if (result.isCorrect) {
				// 	setScore(score + 1);
				// }

			});
	}

	// put request
	const putRequest = (input) => {
		fetch(`http://localhost:8080/api/events/:eventID`, {
			method: "PUT",
			headers: {
				"Content-type": "application/JSON"
			},
			// body: JSON.stringify({ question: totalQuestions[currentQAndA].question, answer: selectedAnswer })
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				// setValidated(result);

				// if (result.isCorrect) {
				// 	setScore(score + 1);
				// }

			});
	}
	// delete request
	const deleteRequest = (input) => {
		fetch(`http://localhost:8080/api/events/:eventID`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/JSON"
			},
		})
			.then((response) => response.json())
			.then((result) => {
				console.log(result);
				// setValidated(result);

				// if (result.isCorrect) {
				// 	setScore(score + 1);
				// }

			});
	}

	return (
		<>{events.length !== 0 ? <EventsTable data={events} /> : <></>}</>
	);
}

export default Events;

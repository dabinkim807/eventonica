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
						name={event.name}
						date={event.date}
						description={event.description}
						category={event.category}
						favorite={event.favorite}
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

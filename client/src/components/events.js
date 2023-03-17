import { useState, useEffect } from "react";
import EventsTable from "./eventsTable";
import AddOrEdit from "./addOrEdit";

function Events() {
	const defaultEvent = {
    id: null,
    name: "",
    date: "",
    description: "",
    category: "Personal"
  };

	const [events, setEvents] = useState([]);
	const [data, setData] = useState(defaultEvent);
  const [open, setOpen] = useState(false);


	const getRequest = () => {
		fetch("http://localhost:8080/api/events")
		.then((response) => response.json())
		.then(events => {
			for (let event of events) {
				event.date = event.date.substring(0, 16);
			}
			setEvents(events); 
			console.log('Events fetched...', events);
			});
	}

	useEffect(() => {getRequest()}, []);

	const handleOpen = () => {
    setOpen(true);
  }
	const handleClose = () => setOpen(false);

	return (
		<>
			{events.length !== 0 ? <EventsTable data={events} getRequest={getRequest} /> : <></>}
			<button onClick={handleOpen}>New Event</button>
			<AddOrEdit open={open} onClose={handleClose} event={data} setEvent={setData} setOpen={setOpen} getRequest={getRequest} />
		</>
	);
}

export default Events;

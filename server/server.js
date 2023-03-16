const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// postgres db data
// const db = require("../server/db/db-connection.js");

// hardcoded events data
const events = require('./hardcodeEvents.js');

const app = express();
const PORT = 8080; 

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.json("Hello Techtonica Server for an app with Events");
});

app.get("/api/events", async (req, res) => {
	// real connection with the DB eventonica
	// try{
	// 	const { rows: events } = await db.query('SELECT * FROM events');
	// 	res.send(events);

	// } catch(error){
	// 	console.log(error);
	// 	return res.status(400).json({error});

	// }

	res.json(events);
});


// ** POST request - create new event entry **
app.post('/api/events', (req, res) => {
  const newEvent = {
    id: req.body.id, 
		name: req.body.name, 
		date: req.body.date,
		description: req.body.description,
		category: req.body.category,
		favorite: req.body.favorite
  };

	// Postgres db
	// const result = await db.query("INSERT INTO events (id, name, date, description, category, favorite) VALUES ($1, $2, $3) RETURNING *",
	// [newEvent.name, newEvent.date, newEvent.description, newEvent.category, newEvent.favorite]);

  events.push(newEvent);

  return res.send("New event has been saved!");
})


// ** PUT request - update existing event **
app.put('/api/events/:eventID', (req, res) => {
  let requestedEvent = req.params.eventID;

  for (let event of events) {
    if (event.id === Number(requestedEvent)) {
      event.name = req.body.name, 
			event.date = req.body.date,
			event.description = req.body.description,
			event.category = req.body.category,
			event.favorite = req.body.favorite
    }
  }

  return res.send("Event has been successfully updated.");
})


// ** DELETE request - delete event **
app.delete('/api/events/:eventID', (req, res) => {

  let deletedEvent = req.params.eventID;
  // console.log("deleting " + deletedEvent);
  for (let i = 0; i < events.length; i++) {
    if (events[i].id === Number(deletedEvent)) {
      events.splice(i, 1);
    }
  }

  return res.send("Event has been successfully deleted.");
})


app.listen(PORT, () =>
	console.log(`Hello! Back-end Server is running on Port http://localhost:${PORT}`)
);

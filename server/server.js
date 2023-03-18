const moment = require("moment");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// postgres db data
const db = require("../server/db/db-connection.js");

// hardcoded events data
// const events = require('s./hardcodeEvents.js');

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
	try{
		const { rows: events } = await db.query('SELECT * FROM events');
		console.log(events);
		res.send(events);

	} catch(error){
		console.log(error);
		return res.status(400).json({error});
	}

	// hardcoded data
	// res.json(events);
});

// hardcoded data
// let max = 0;
// for (let i = 0; i < events.length; i++) {
// 	if (events[i].id > max) {
// 		max = events[i].id;
// 	}
// }

// ** POST request - create new event entry **
app.post('/api/events', async (req, res) => {
	console.log(req.body);

	// max+=1;

	// Postgres db
	try {
		const result = await db.query(
			"INSERT INTO events (name, date, description, category, favorite) VALUES ($1, $2, $3, $4, $5) RETURNING *", 
			[req.body.name, req.body.date, req.body.description, req.body.category, req.body.favorite]
		);
		const newEvent = {
			id: result.id, 
			name: result.name, 
			date: result.date,
			description: result.description,
			category: result.category,
			favorite: result.favorite
		};
		console.log(result);
	} catch(error) {
		console.log(error);
	}
	

	// hardcoded data

	// const newEvent = {
  //   id: max, 
	// 	name: req.body.name, 
	// 	date: req.body.date,
	// 	description: req.body.description,
	// 	category: req.body.category,
	// 	favorite: req.body.favorite
  // };

  // events.push(newEvent);
	return res.end();
})


// ** PUT request - update existing event **
app.put('/api/events/:eventID', async (req, res) => {
	const id = parseInt(req.query.eventID);

	// Postgres db
	try {
		const result = await db.query(
			"UPDATE events SET (name = $1, date = $2, description = $3, category = $4, favorite = $5) WHERE id = $7 RETURNING *", 
			[req.body.name, req.body.date, req.body.description, req.body.category, req.body.favorite, id]
		);
	} catch(error) {
		console.log(error);
	}
	console.log(result);

	// hardcoded data
  // for (let event of events) {
  //   if (event.id === Number(requestedEvent)) {
  //     event.name = req.body.name, 
	// 		event.date = req.body.date,
	// 		event.description = req.body.description,
	// 		event.category = req.body.category,
	// 		event.favorite = req.body.favorite
  //   }
  // }
	return res.end();
})


// ** DELETE request - delete event **
app.delete('/api/events/:eventID', async (req, res) => {
	// let requestedEvent = req.params.eventID;

	const id = parseInt( req.params.eventID);

	// Postgres db
	try {
		const result = await db.query("DELETE FROM events WHERE id = $1", [id]);
		res.status(200).send(`Event deleted with ID: ${id}`)
	} catch(error) {
		console.log(error);
	}

  // let deletedEvent = req.params.eventID;
  // console.log("deleting " + deletedEvent);
  // for (let i = 0; i < events.length; i++) {
  //   if (events[i].id === Number(deletedEvent)) {
  //     events.splice(i, 1);
  //   }
  // }
	return res.end();
})


app.listen(PORT, () =>
	console.log(`Hello! Back-end Server is running on Port http://localhost:${PORT}`)
);

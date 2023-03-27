const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const db = require("../server/db/db-connection.js");

const app = express();
const PORT = 8080; 

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
	res.json("Hello Techtonica Server for an app with Events");
});

app.get("/api/events", async (req, res) => {
	try{
		const { rows: events } = await db.query('SELECT * FROM events');
		res.send(events);
	} catch(error){
		console.log(error);
		return res.status(400).json({error});
	}
});

app.post('/api/events', async (req, res) => {
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
	} catch(error) {
		console.log(error);
	}
	return res.end();
})

app.put('/api/events/:eventID', async (req, res) => {
	const id = parseInt(req.params.eventID);
	try {
		const result = await db.query(
			"UPDATE events SET name = $1, date = $2, description = $3, category = $4, favorite = $5 WHERE id = $6 RETURNING *", 
			[req.body.name, req.body.date, req.body.description, req.body.category, req.body.favorite, id]
		);
	} catch(error) {
		console.log(error);
	}
	return res.end();
})

app.delete('/api/events/:eventID', async (req, res) => {
	const id = parseInt(req.params.eventID);
	try {
		const result = await db.query("DELETE FROM events WHERE id = $1", [id]);
		res.status(200).send(`Event deleted with ID: ${id}`)
	} catch(error) {
		console.log(error);
	}
	return res.end();
})


app.listen(PORT, () =>
	console.log(`Hello! Back-end Server is running on Port http://localhost:${PORT}`)
);

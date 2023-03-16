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
	// real connection with the DB eventonica
	// try{
	// 	const { rows: events } = await db.query('SELECT * FROM events');
	// 	res.send(events);

	// } catch(error){
	// 	console.log(error);
	// 	return res.status(400).json({error});

	// }

	const events = [
		{
			id: 1,
			name: "Women in Tech Techtonica Panel",
			date: "10/10/23",
			description: "Overland Park Convention Center",
			category: "Personal",
			favorite: true
		},
		{
			id: 2,
			name: "Japanese Cultural Education",
			date: "10/10/23",
			description: "Seattle Convention Center",
			category: "Work",
			favorite: false
		},
		{
			id: 3,
			name: "Haven 90's Party Night Club",
			date: "10/10/23",
			description: "Hilton Hotel Kansas City",
			category: "Personal",
			favorite: false
		},
		{
			id: 4,
			name: "Comedy Night at the Station",
			date: "10/10/23",
			description: "SF Hilton Hotel",
			category: "Personal",
			favorite: false
		},
		{ id: 5, 
			name: "A Decadent Arts Experience", 
			date: "10/10/23",
			description: "West Ridge Mall",
			category: "Personal",
			favorite: true
		},
		{ id: 6, 
			name: "Techtonica Classroom Course", 
			date: "10/10/23",
			description: "Techtonica HQ",
			category: "Work",
			favorite: false
		},
	];
	res.json(events);
});

// POST request - add event

// PUT request - edit event

// DELETE request - delete event


app.listen(PORT, () =>
	console.log(`Hello! Back-end Server is running on Port http://localhost:${PORT}`)
);

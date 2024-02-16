const express = require('express');

// package to interact with the Chinook database
const Database = require('better-sqlite3');
const db = Database(__dirname + '/database/chinook.sqlite');

// create an express application
const app = express();


// configure a folder to serve static content
app.use(express.static('_FrontendStarterFiles'))


// fetch and send artist data
app.get('/api/artists', (req, res) => {
    
    // define a query to send to the database
    const statement = db.prepare('SELECT * FROM artists');
    const data = statement.all();

    res.json(data);
})

// fetch and send albums for a specific artist
app.get('/api/artists/:artistId/albums', (req, res) => {

    const statement1 = db.prepare('SELECT * FROM artists WHERE ArtistId = ?');
    const data = statement1.get(req.params.artistId);

    const statement2 = db.prepare('SELECT * FROM albums WHERE ArtistId = ?');
    const albums = statement2.all(data.ArtistId);
    
    res.status(200).json(albums);
})


const server = app.listen('8000', () => {
    console.log("Listening on Port 8000");
})

module.exports = {app, server};
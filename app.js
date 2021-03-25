const express = require("express");
const app = express();
const connectDB = require("./back/database");
const gameroom = require("./back/gameroom");
const event = require("./back/event");

const port = 3000;

app.listen(port, () => {
    console.log(`Listening on port: ${PORT}`);
});

connectDB();
app.use(express.static("front"));

app.get("/api/gamerooms", async (req, res) => {
    try {
        const allGamerooms = await gameroom.find();
        res.json({
            success: true,
            gamerooms: allGamerooms
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        });
    }
});
app.get("/api/gamerooms/:id", async (req, res) => {
    try {
        const gameroomId = req.params.id;
        const specificGameroom = await gameroom.findById(gameroomId);
        res.json({
            success: true,
            gameroom: specificGameroom
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        });
    }
});

app.get("/api/events", async (req, res) => {
    try {
        const allEvents = await event.find();
        res.json({
            success: true,
            events: allEvents
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        });
    }
});
app.get("/api/events/:id", async (req, res) => {
    try {
        const eventId = req.params.id;
        const specificEvent = await event.findById(eventId);
        res.json({
            success: true,
            event: specificEvent
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        });
    }
});
app.post("/api/events", async (req, res) => {
    try {
        const name = req.body.name;
        const noviTim = new Tim({
            ime: ime,
        });
        const sacuvanTim = await noviTim.save();
        res.json({
            uspesno: true,
            tim: sacuvanTim,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});
app.delete("/api/events/:id", async (req, res) => {
    try {
        const eventId = req.params.id;
        const specificEvent = await event.findById(eventId);
        const deletedEvent = await specificEvent.delete();
        res.json({
            success: true,
            event: deletedEvent
        });
    } catch (err) {
        res.status(404).json({
            success: false,
            message: err.message
        });
    }
});

/*app.post("/api/clan", async (req, res) => {
    try {
        const timId = req.body.idTima;

        const tim = await Tim.findById(timId);

        const noviClan = {
            ime: req.body.ime,
            prezime: req.body.prezime,
            mail: req.body.mail,
            skola: req.body.skola,
        };

        tim.clanovi.push(noviClan);

        const sacuvanTim = await tim.save();

        res.json({
            uspesno: true,
            tim: sacuvanTim,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});

app.post("/api/tehnologija", async (req, res) => {
    try {
        const timId = req.body.timId;
        const tehnologija = req.body.tehnologija;

        const tim = await Tim.findById(timId);

        tim.omiljeneTehnologije.push(tehnologija);

        const sacuvanTim = await tim.save();

        res.json({
            uspesno: true,
            tim: sacuvanTim,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});

app.get("/api/proba", async (req, res) => {
    try {
        const timovi = await Tim.find({
            omiljeneTehnologije: {
                $all: ["Javascript", "PHP"],
            },
        });

        res.json({
            uspesno: true,
            timovi: timovi,
        });
    } catch (err) {
        res.status(404).json({
            uspesno: false,
            poruka: err.message,
        });
    }
});*/
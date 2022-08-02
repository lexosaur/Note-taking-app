const express = require("express");
//const path = require("path");
const connect = require("./connectMongo");
const app = express();

app.use(express.json());

const User = require("./schema");

app.post("/", async (req, res) => {
    const notes = req.body;
    console.log(notes);
    return res.json(true);
});

app.listen(4300, () => {
    console.log("Server started");
    connect();
});

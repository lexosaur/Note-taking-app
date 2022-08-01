const express = require("express");
//const path = require("path");
const connect = require("./connectToDatabase");
const app = express();

const User = require("./schema");

app.get("/", async (req, res) => {
    const {first_name, last_name, email, number} = req.query;
    //const name = req.query.name;
    //const email *= req.query.email; //req.query = {}
})
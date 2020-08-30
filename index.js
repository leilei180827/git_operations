const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
app.get("/", (req, res) => res.send("Hello leilei180827"));
app.listen(port, (req, res) => console.log("server starts"));

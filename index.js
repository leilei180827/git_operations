const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const auth_user = require("./middleware/auth_user");
const user_route = require("./routes/user");
app.use(auth_user);
app.use("/user", user_route);
app.get("/", (req, res) => res.send("Hello leilei180827"));
app.listen(port, (req, res) => console.log("server starts"));

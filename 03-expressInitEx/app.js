const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const homeRoutes = require("./routes/home");
const usersRoutes = require("./routes/users");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(homeRoutes);
app.use(usersRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(3000);

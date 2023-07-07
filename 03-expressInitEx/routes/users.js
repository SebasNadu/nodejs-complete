const path = require("path");

const express = require("express");

// const rootDir = require("../util/path");

const router = express.Router();

const users = [];

router.get("/users", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "users.html"));
  res.render("users", { pageTitle: "User", users: users });
});

router.post("/add-user", (req, res, next) => {
  // res.redirect("/users");
  users.push({ name: req.body.username });
  res.redirect("/users");
});

module.exports = router;

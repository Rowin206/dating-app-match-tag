// bron: https://github.com/cmda-bt/be-course-18-19/tree/master/examples/express-server
const express = require("express");
var session = require("express-session");

// Use Routes
express()
 
    .use(require("./route"))
    .use(require("./route/login"))
    .use(require("./route/register"))
    .use(require("./route/about"))
    .use(require("./route/searchLocation"))
    .use(require("./route/droppedTags"))
    

    .use(session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SESSION_SECRET
    }))

    .use(express.static("static"))
    .use("/static/images/", express.static("./static/images"))
    .set("view engine", "ejs")
    .set("views", "view")
    .use(notFound)
    .listen(8000);

function notFound(req, res) {
    res.status(404).render("not-found.ejs");
}
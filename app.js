const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const { PORT } = process.env;
const date = require(__dirname + "/date.js");


const port = PORT;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: "true" }));

const items = [];
const workItems = [];
app.get("/", function (req, res) { 

let day = date.getDay()
    res.render("pages/index", { Tittle: day, newListItems: items });
});

app.post("/", function (req, res) {
    const item = req.body.newList;
    const list = req.body.list;

    if (list === "Work") {
        workItems.push(item);
        res.redirect("/work")
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function (req, res) {
    res.render("pages/index", { Tittle: "Work List", newListItems: workItems });
});

app.listen(port, function () {
    console.log(`serving on port ${port}`);
});
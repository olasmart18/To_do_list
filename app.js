const express = require('express');
const bodyParser = require('body-parser');
const env = require('dotenv').config();
const { PORT } = process.env;


const port = PORT;
const app = express();
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: "true"}));

const items = [];
app.get("/", function(req, res){
    let date = new Date()
    // let currentDay = date.getDay()
    // let today = currentDay ;

    let options = {
        day : "numeric",
        month : "long",
        year : "numeric"
    };
    let day = date.toLocaleDateString("en-US", options);
       
        res.render("pages/index", {Tittle: day, newListItems: items });
});

app.post("/", function(req, res){
     const item = req.body.newList;
     items.push(item)
    res.redirect("/");
})

app.listen(port, function(){
    console.log(`serving on port ${port}`);
})
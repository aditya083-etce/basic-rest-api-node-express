const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const quiz = require("./sample.json");

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));

app.set('views', path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.post("/", (req, res) => {
    const {question, answer} = req.body;
    const newquiz = {
        question: question,
        answer: answer,
        author: "omen"
    }
    quiz.push(newquiz);
    res.redirect('/');
})

app.get("/", (req, res) => {
    res.render('index', {quiz: quiz});
})

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running at port ${port}`);
})
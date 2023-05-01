const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("upload"));

const auth = require('./controllers/auth');
const question = require('./controllers/question');
const response = require('./controllers/response');

app.listen(5000, "localhost", () => {
    console.log("SERVER IS RUNNING");
});


app.use("/auth", auth);
app.use("/question", question);
app.use("/response", response);

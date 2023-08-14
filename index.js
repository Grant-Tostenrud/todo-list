import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

var personalTodoList = [];
var workTodoList = [];

app.get("/", (req, res) => {
  res.render("index.ejs", {
    items: personalTodoList,
  });
});

app.get("/work", (req, res) => {
  res.render("work.ejs", {
    items: workTodoList,
  });
});

app.post("/", (req, res) => {
  personalTodoList.push(req.body.todoItem);
  res.render("index.ejs", {
    items: personalTodoList,
  });
});

app.post("/work", (req, res) => {
  workTodoList.push(req.body.todoItem);
  res.render("work.ejs", {
    items: workTodoList,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
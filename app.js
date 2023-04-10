const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));

const items1 = [];
const items2 = [];
app.set("view engine", "ejs")


app.get("/", (req, res) => {
  let day = date.getDate();
  res.render("list",{listTitle:day,newListItem:items1});
});

app.post("/",(req,res) => {
  let item = req.body.newItem;
  if(req.body.list === "Work")
  {
    items2.push(item);
    res.redirect("/work");
  }
  else{
    items1.push(item);
    res.redirect("/");
  }
});

app.get("/work",(req,res) => {
  res.render("list",{listTitle:"Work",newListItem:items2});
});

app.get("/about",(req,res) =>{
  res.render("about");
});

app.listen(3000, () => {
  console.log("Server running at port 3000");
});

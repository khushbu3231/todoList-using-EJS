const express = require("express");
const bodyParser = require("body-parser");
const date=require(__dirname+"/date.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

let items = ["Read javaScript","Pay bill"];
let workList = ["Finish Angular Project"];
app.get("/", function (req, res) {
    var day = date.getDate();
    res.render("lists", { listName: day, newListItem: items });
});

app.post("/", function (req, res) {
    if (req.body.list === "Work") {
        var workItem = req.body.newTask;
        
        workList.push(workItem);
        res.redirect("/work");
    }
    else {
        var item = req.body.newTask;
        items.push(item);
        res.redirect("/");
    }


});

app.get("/work", function (req, res) {
    res.render("lists", { listName: "Work List", newListItem: workList });
});

// app.post("/work", function(req,res){
//     var workItem=req.body.newTask;
//     workList.push(workItem);
//     res.redirect("/work");
// });

app.listen(3000, function () {
    console.log("server is started at port 3000");
});
var express = require("express");
var app = express();

app.get("/", function(req,res) {
	console.log("This is working")
	res.send("Hello World");
});

app.get("*", function(req,res){
	res.send("Error");
}); 

app.listen(5000, function(){
	console.log("server is listening");
});
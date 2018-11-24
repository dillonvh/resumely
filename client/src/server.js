var express = require("express");
var app = express();

app.get("/", function(req,res) {
	console.log("This is working")
	res.send("Hello World");
});

app.get("*", function(req,res){
	res.send("Error");
}); 

app.listen(3000, function(){
	console.log("server is listening");
});

//I wasn't able to view this when I ran the server. I don't know how to. Can you show me? 
//Let me know if I did anything wrong. 
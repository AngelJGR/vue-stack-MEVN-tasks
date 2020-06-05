const express = require("express");
const morgan = require("morgan");
const mongodb = require("mongoose");
const app = express();

mongodb.connect("mongodb://localhost/mevn-database", { useNewUrlParser: true, useUnifiedTopology: true })
		.then(db => console.log("DB is connected"))
		.catch(err => console.error(err));


//Settings
app.set("port", process.env.PORT || 2000);

//Middlewares
app.use(morgan("dev"));
app.use(express.json());


//Routes
app.use("/api/tasks", require("./routes/tasks"));

//Static files
app.use(express.static(__dirname + "/public"));

//Server
app.listen(app.get("port"), () => {
	console.log("Server on port " + app.get("port"));
});
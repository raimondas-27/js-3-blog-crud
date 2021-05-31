const express = require("express");

const app = express();

const PORT = 5000;

app.get("/", function (req, res) {
   res.send("hello world");
});

//404 case

app.use((req,res) => {
   res.status(404).send("page was not found :(")
})

app.listen(PORT, () => console.log("server is running"))
const express = require("express");
const path = require("path");


const app = express();
const PORT = 5000;

app.get("/", function (req, res) {
   res.sendFile(path.join(__dirname, "pages", "index.html"))
});

app.get("/about", function (req, res) {
   res.sendFile(path.join(__dirname, "pages", "about.html"))
});

app.get("/blog", function (req, res) {
   res.sendFile(path.join(__dirname, "pages", "blog.html"))
});

//statine direktorija css,js,img ir kitiems statiniams failams
const staticPath = path.join(__dirname, "static")
app.use(express.static(staticPath));

//404 case

app.use((req,res) => {
   res.status(404).send("page was not found :(")
})

app.listen(PORT, () => console.log("server is running"))
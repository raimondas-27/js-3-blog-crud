const express = require("express");
const path = require("path");
const blogData = require("./data/sampleBlog");
const blogs = require("./data/blogDb");

const app = express();
const PORT = 5000;


//register view engine

app.set("view engine", "ejs");

//render views homedir

app.set("views", "src/views");


app.get("/", function (req, res) {
   // res.sendFile(path.join(__dirname, "pages", "index.js"))
   //paimti index.ejs faila is views direktorijos
   res.render("index", {
      title: "Home",
      page : "home",
      blogData
   })
});

app.get("/about", function (req, res) {
   // res.sendFile(path.join(__dirname, "pages", "about.js"))
   res.render("about", {
      title : "About us",
      page : "about",
   })
});

app.get("/blog", function (req, res) {
   // res.sendFile(path.join(__dirname, "pages", "blog.js"))
   res.render("blog", {
      title: "Blog",
      page : "blog",
      blogs
   })
});

// contact page
app.get('/contact', function (req, res) {
  res.render('contact', {
     title : "Contact us",
     page : "contact",
  });
});

//statine direktorija css,js,img ir kitiems statiniams failams
const staticPath = path.join(__dirname, "static")
app.use(express.static(staticPath));

//404 case

app.use((req,res) => {
   res.status(404).send("page was not found :(")
})

app.listen(PORT, () => console.log("server is running"))
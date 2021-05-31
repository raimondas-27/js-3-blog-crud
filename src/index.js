const express = require("express");
const path = require("path");
const blogData = require("./data/sampleBlog");
const blogDb = require("./data/blogDb");

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
      page: "home",
      blogData
   })
});

app.get("/about", function (req, res) {
   // res.sendFile(path.join(__dirname, "pages", "about.js"))
   res.render("about", {
      title: "About us",
      page: "about",
   })
});

app.get("/blog", function (req, res) {
   // res.sendFile(path.join(__dirname, "pages", "blog.js"))
   res.render("blog", {
      title: "Blog",
      page: "blog",
      blogs
   })
});

// contact page
app.get('/contact', function (req, res) {
   res.render('contact', {
      title: "Contact us",
      page: "contact",
   });
});


//create blog page  /blog/create

app.get("/blog/create", function (req, res) {
   res.render("createBlog", {
      title: "Create new Post",
      page: "createB",
   });
})

//statine direktorija css,js,img ir kitiems statiniams failams
const staticPath = path.join(__dirname, "static")
app.use(express.static(staticPath));

//blog api, noresim eiti i  /api/blog, gauti visus postus json pavidalu


app.get("/api/blog", (req, res) => {
   res.json(blogDb)
});

//404 case

app.use((req, res) => {
   res.status(404).send("page was not found :(")
})

app.listen(PORT, () => console.log("server is running"))
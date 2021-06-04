const express = require('express');
const app = express();
const path = require('path');
const mongoose = require("mongoose");
const mongoDbString = require("./config/config");

const pageRoutes = require('./routes/pagesRoutes');
const apiRoutes = require('./routes/api/apiRoutes');
const ownersRoutes = require("./routes/ownersRoutes")
const apiOwnerRoutes = require("./routes/api/apiOwnerRoutes");
const blogRoutes = require("./routes/blogRoutes");

// register view engine
app.set('view engine', 'ejs');
// nustatom render view home dir
app.set('views', 'src/views');

//for req.body() to work
app.use(express.json());

// pages routes
app.use("/", pageRoutes);
app.use("/", ownersRoutes);
app.use("/", blogRoutes);

//api routes

app.use("/api/blog", apiRoutes);
app.use("/api/owners", apiOwnerRoutes);


const staticPath = path.join(__dirname, 'static');
// statine direktorija, css, js, img ir kt statiniam failam
app.use(express.static(staticPath));

// isitraukti api routes ir panaudoti cia kad veiktu

// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));

//prisijungimas prie duombazes
mongoose.connect(mongoDbString, {useNewUrlParser: true, useUnifiedTopology: true})
    .then((result) => {
       console.log("connected to mongoose")
       app.listen(4000)
    })
    .catch((error) => console.warn(error))
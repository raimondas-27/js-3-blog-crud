const express = require('express');
const app = express();
const path = require('path');

const PORT = 5000;

const pageRoutes = require('./routes/pagesRoutes');
const apiRoutes = require('./routes/api/apiRoutes');

// register view engine
app.set('view engine', 'ejs');
// nustatom render view home dir
app.set('views', 'src/views');

//for req.body() to work
app.use(express.json());

// pages routes
app.use('/', pageRoutes);

//api routes
app.use('/api/blog', apiRoutes);

const staticPath = path.join(__dirname, 'static');
// statine direktorija, css, js, img ir kt statiniam failam
app.use(express.static(staticPath));

// isitraukti api routes ir panaudoti cia kad veiktu

// 404 case - kai vartojas ivede psl kurio nera
app.use((req, res) => res.status(404).send('OOPs Page not found'));

app.listen(PORT);
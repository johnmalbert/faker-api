const express = require('express');
const app = express();
// const routes = require('./routes/routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./routes/routes')(app);//pass the app into routes so that we can use app.

app.listen(8000, () => console.log("Now listening on port 8000"));
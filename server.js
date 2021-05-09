const express = require('express');
const PORT = process.env.PORT || 3001; //environment variable!
const app = express(); // instantiates the server
const routes = require('./routes/noteRoutes');

app.use(express.urlencoded({ extended: true }));// parse incoming string or array data
app.use(express.json());// parse incoming JSON data
app.use(express.static('Develop/public')); //makes the public file a static route resource - this prevents needing to intiate multiple get routes for different page files

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });
  



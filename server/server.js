const express = require("express");
const app = express();
const passport = require("passport");

// route
const routeUser = require('./routes/api/users');

//db
const db = require('./config/db');
db.connect();

// Bodyparser middleware
//* middlerware
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());


// Passport middleware
app.use(passport.initialize());
// Passport config
require("./utils/passport")(passport);

// routes
app.use('/api/users', routeUser);


const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server up and running on port ${port} !`));

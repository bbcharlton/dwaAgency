const express = require('express');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json());

// Routes
app.use('/', require('./routes/user.js')(express));
app.use('/', require('./routes/character.js')(express));

// Server Active
module.exports = app.listen(port, () => {
	console.log('Server running on port: ', port);
})

// A simple Node.js static file server for development use.
//
// To run, first install Node.js and Express, then run the shell command
// `node server.js`. Run in the background with `node server.js &`.
//
// By Curran Kelleher  curran.kelleher@gmail.com 9/24/2014
var port = 8000,
    express = require('express'),
    app = express();

// Serve static files.
app.use('/', express.static(__dirname));

// Start the server.
app.listen(port);

// Output a success message to the command line user.
console.log('Now serving http://localhost:'+port);
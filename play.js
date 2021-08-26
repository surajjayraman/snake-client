const conn = require('./client');
const setupInput = require('./input');
// stores the active TCP connectiong object
const connection = conn.connect();
setupInput.setupInput(connection);
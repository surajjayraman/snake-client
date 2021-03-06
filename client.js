const net = require("net");
const { IP, PORT } = require("./constants");
// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  // here we are sending data to the server
  conn.on('connect', () => {
    console.log("Successfully connected to game Server");
    conn.write("Name: SJN");
    //conn.write("Move: up");
  });
  
  //handle incoming data
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  
  });
  
  return conn;
};

console.log("Connecting ...");

module.exports = {
  connect
};
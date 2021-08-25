const net = require("net");

// establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // here we are sending data to the server
  conn.on('connect', () => {
    process.stdin.on('data', (data) => {
      conn.write(data);
    });
  });

  //handle incoming data
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);

  });

  return conn;
};

console.log("Connecting ...");
connect();

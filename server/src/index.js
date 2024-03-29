const server = require("./app");
const PORT = 3001;
const { conn } = require("./DB_connection");

// server.listen(PORT, () => {
//    console.log('Server raised in port: ' + PORT);
// });

server.listen(PORT, async () => {
  try {
   await conn.sync({force:false})
    console.log("Server raised in port: " + PORT);
  } catch (error) {
   console.log(error.message);
  }
});


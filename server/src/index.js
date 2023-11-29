const http = require("http");
const { listeners } = require("process");
const PORT = 3001;
const characters = require("./utils/data");
const {getCharById} = require("./controllers/getCharById");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      const id = Number(req.url.split("/").pop());
      getCharById(res, id);
    }
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on port ${PORT}`);
  });

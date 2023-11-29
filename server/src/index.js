const http = require("http");
const { listeners } = require("process");
const PORT = 3001;
const characters = require("./utils/data");

http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes("/rickandmorty/character")) {
      const id = req.url.split("/").pop();
      const character = characters.find((char) => char.id === Number(id)); //find devuelve el elemento, filter, un array con el elemento
      // console.log(characters);
      if (character) {
        return res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify(character));
      } else {
        return res
          .writeHead(404, { "Content-Type": "application/json" })
          .end(JSON.stringify({ message: "Character Noy Found" }));
      }
    }
    return res
      .writeHead(404, { "Content-Type": "application/json" })
      .end(JSON.stringify({ message: "Wrong URL" }));
  })
  .listen(PORT, "127.0.0.1", () => {
    console.log(`Server running on port ${PORT}`);
  });

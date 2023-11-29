const axios = require("axios");

function getCharById(res, id) {
  const URL = "https://rym2.up.railway.app/api/character";
  const API_KEY = "henrystaff";

  axios
    .get(`${URL}/${id}?key=${API_KEY}`)
    .then(({ data }) => {
      if (data.name) {
        const character = {
          id: id,
          name: data.name,
          gender: data.gender,
          species: data.species,
          origin: data.origin,
          image: data.image,
          status: data.status,
        };
        return res
          .writeHead(200, { "Content-Type": "application/json" })
          .end(JSON.stringify(character));
      }
    })
    .catch((error) => {
      return res
        .writeHead(500, { "Content-Type": "text/plain" })
        .end(error.message);
    });
}

module.exports = { getCharById };

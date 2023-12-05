const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character";
// const API_KEY = "henrystaff";

async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const { data } = await axios.get(`${URL}/${id}`);
    const character = {
      id: data.id,
      status: data.status,
      name: data.name,
      species: data.species,
      origin: data.origin,
      image: data.image,
      gender: data.gender,
      location: data.location,
    };
    return character.name
        ? res.json(character)
        : res.status(404).send("Not fount");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = getCharById;

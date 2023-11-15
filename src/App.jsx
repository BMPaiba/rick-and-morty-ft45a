import "./App.css";
import Card from "./components/Card.jsx";
import Cards from "./components/Cards.jsx";
// import SearchBar from "./components/SearchBar.jsx";
// import characters, { Rick } from './data.js';
import Nav from "./components/Nav.jsx";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacteres] = useState([]);

  // const onClose = () => {
  //   alert('estas ejecutando onClose');
  // };

  const onClose = (id) => {
    //  console.log("el character es => ", characters);
    //  console.log("el id es: ", id);
    setCharacteres(characters.filter((personaje) => personaje.id !== id));
    //  alert("estas ejecutando onClose");
  };

  function onSearch(id) {
    const characterId = characters.filter(char => char.id === Number(id))
    if(characterId.length) {
      return alert(`El personaje con id ${id} ya existe`)
    }
    // axios(`https://rickandmortyapi.com/api/character/${id}`).then(
    axios(`https://rym2.up.railway.app/api/character/${id}?key=henrystaff`).then(
      ({ data }) => {
        if (data.name) {
          setCharacteres((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;

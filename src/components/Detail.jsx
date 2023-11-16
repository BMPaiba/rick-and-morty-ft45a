import React from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Detail() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    //      <div>
    //      {character.name && <h2>Name: {character.name}</h2>}
    //      {character.status && <h2>Status: {character.status}</h2>}
    //      {character.species && <h2>Species: {character.species}</h2>}
    //      {character.gender && <h2>Gender: {character.gender}</h2>}
    //      {character.origin && character.origin.name && <h2>Origin: {character.origin.name}</h2>}
    //      {character.image && <img src={character.image} alt="Character" />}
    //    </div>
    <div>
      {character.name && (
        <div>
          <h1> {character.name}</h1>
          <h2>Status: {character.status}</h2>
          <h2>Species: {character.species}</h2>
          <h2>Gender: {character.gender}</h2>
          <h2>Origin: {character.origin && character.origin.name}</h2>
          <img src={character.image} alt={character.name} />
        </div>
      )}
    </div>
    // <div>
    //   <h1> {character.name}</h1>
    //   <h2>Status: {character.status}</h2>
    //   <h2>Species: {character.species}</h2>
    //   <h2>Gender: {character.gender}</h2>
    //   <h2>Origin: {character.origin?.name}</h2>
    //   <img src={character.image} alt={character.name} />
    // </div>
  );
}

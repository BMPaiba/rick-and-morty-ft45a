import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import styles from "./detail.module.css";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { TbArrowBackUp } from "react-icons/tb";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
export default function Detail(props) {
  const { id } = useParams(); //* { id: 429 }
  const navigate = useNavigate();
  // console.log(id);
  const idNumber = Number(id);
  const [character, setCharacter] = useState({});
  let allCharacters = props.characters;
  let idActually = allCharacters.find((char) => char.id === idNumber);
  let idPosition = allCharacters.findIndex((char) => char.id === idNumber);

  // console.log('el id es ',allCharacters[idPosition].id);
  // console.log("íd position es:", (idActually.id));
  const comeback = () => {
    navigate('/home')
  };

  const next = () => {
    let newId;
    if (idPosition !== allCharacters.length - 1) {
      newId = allCharacters[idPosition + 1].id;
    }
    if (idPosition === allCharacters.length - 1) {
      newId = allCharacters[0].id;
    }
    navigate(`/detail/${newId}`);
  };

  const previus = () => {
    let newId;
    if (idPosition === 0) {
      newId = allCharacters[allCharacters.length - 1].id;
    }
    if (idPosition !== 0) {
      newId = allCharacters[idPosition - 1].id;
    }
    navigate(`/detail/${newId}`);
  };

  // console.log(id);
  useEffect(() => {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
      // axios(`${URL}/${id}?key=${API_KEY}`)
      //* { timpo:x, status:x, data: { Rick } }
      .then(({ data }) => {
        if (data.name) {
          // console.log(data);
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
    return setCharacter({});
  }, [id]);

  return (
    <div>
    <div className={styles.container}>

      <SlArrowLeft className={styles.container__icon} onClick={next} />
      <div className={styles.container__img}>
        <img
          className={styles.container__img_img}
          src={character.image}
          alt={character.name}
        />
      </div>
      <div className={styles.container__text}>
        {/* <h1>Details:</h1> */}
        <h2>{character.name}</h2>
        <h3>Status: {character.status}</h3>
        <h3>Specie: {character.species}</h3>
        <h3>Gender: {character.gender}</h3>
        <h3>Origin: {character.origin?.name}</h3>
        <h3>Location: {character.location?.name}</h3>
      </div>
      <SlArrowRight className={styles.container__icon} onClick={previus} />
      </div>
    <TbArrowBackUp className={styles.container__icon} id={styles.comeback} onClick={comeback}/>
    </div>
  );
}

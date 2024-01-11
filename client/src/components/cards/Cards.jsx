import Card from "../card/Card.jsx";
import style from "./cards.module.css";

export default function Cards({ characters, onClose }) {
  
  return (
    <div className={style.container}>
      {!characters.length ? (
        <div className={style.container__mensajeinicio}>
          <p className={style.container__mensajeinicio_text}>
            There are no existing Characters, enter the id and press <button className={style.container__button}>Add</button> to add
            a new Character. You can also generate a random Character by
            pressing <button className={style.container__button} >Random</button>
          </p>
        </div>
      ) : (
        characters.map((character) => (
          <Card
            key={character.id}
            id={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={onClose}
          />
        ))
      )}
    </div>
  );
}

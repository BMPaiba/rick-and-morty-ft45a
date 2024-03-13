import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import { FaRandom } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { FaTrashCan } from "react-icons/fa6";

export default function SearchBar(props) {
  const [id, setId] = React.useState(""); //* [ Estado, manejador]
  const handleChange = (event) => {
    const { value } = event.target;
    // console.log(value);
    setId(value);
  };

  const handleClick = (event) => {
    event.preventDefault();
    props.onSearch(id);
    setId("");
  };
  //* Traer Character Random
  const handleRandom = () => {
    const randomNumber = Math.floor(Math.random() * 826) + 1;
    props.onSearch(randomNumber);
  };
  const handleClear = () => {
    props.onClear();
  };
  const [mostrarLogo, setMostrarLogo] = useState(false);
  return (
    <div className={styles.container}>
      <input
        type="text"
        name="search"
        id="search"
        className={styles.inputId}
        onChange={handleChange}
        value={id}
        placeholder="type id..."
      />

      <button className={styles.buttons} onClick={handleClick}>
        Add
      </button>
      
      <button className={styles.buttons} onClick={handleRandom}>
        Random
      </button>

      <button className={styles.buttons} onClick={handleClear}>
        Clear
      </button>


      <IoPersonAdd className={styles.buttons_mobile} onClick={handleClick} />
      <GiPerspectiveDiceSixFacesRandom  className={styles.buttons_mobile} onClick={handleRandom}/>
      <FaTrashCan className={styles.buttons_mobile} onClick={handleClear}/>

    </div>
  );
}

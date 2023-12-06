import React from "react";
import styles from './SearchBar.module.css'

export default function SearchBar(props) {

   const [id, setId] = React.useState(""); //* [ Estado, manejador]
   const handleChange = event => {
      const {value} = event.target;
      // console.log(value);
      setId(value);
   }

   const handleClick = event => {
      event.preventDefault();
      props.onSearch(id);
      setId("");
   }
   //* Traer Character Random
   const handleRandom = () => {
		const randomNumber = Math.floor(Math.random() * 826) + 1;
		props.onSearch(randomNumber);
	};
   const handleClear = () => {
		props.onClear();
	};


   
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
         <button className={styles.buttons} onClick={handleClick}>Add</button>
         {/* Traer Character Random */}
         <button className={styles.buttons} onClick={handleRandom}>Random</button>
         <button className={styles.buttons} onClick={handleClear}>Clear</button>
        
      </div>
   );
}

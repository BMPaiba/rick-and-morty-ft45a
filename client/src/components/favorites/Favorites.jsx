import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card.jsx";
import { filterCards, orderCards } from "../../redux/actions.js";
import styles from './favorites.module.css'


export default function Favorites({ onClose }) {

  const myFavorites = useSelector(state => state.myFavorites);

  const dispatch = useDispatch();

  const handleOrder = event => {
   dispatch(orderCards(event.target.value));
  }
  const handleFilter = event => {
   dispatch(filterCards(event.target.value));
  }

   return (
      <div className={styles.container}>
         <div>
            <select className={styles.container__button} name="order" onChange={handleOrder}>
               <option className={styles.container__button_option} value="A">Ascendente</option>
               <option className={styles.container__button_option} value="D">Descendente</option>
            </select>
            <select className={styles.container__button} name="filter" onChange={handleFilter}>
               <option className={styles.container__button_option} value="All">All</option>
               <option className={styles.container__button_option} value="Male">Male</option>
               <option className={styles.container__button_option} value="Female">Female</option>
               <option className={styles.container__button_option} value="Genderless">Genderless</option>
               <option className={styles.container__button_option} value="unknown">unknown</option>
            </select>
         </div>

         <div
            style={{
               display: "flex",
               flexWrap: "wrap",
               justifyContent: "space-evenly"
            }}
         >
            {
               !myFavorites.length
               ? <h2>No hay favoritos</h2>
               :
               myFavorites.map(myFavorite => (
                  <Card
                     key={myFavorite.id}
                     id={myFavorite.id}
                     name={myFavorite.name}
                     status={myFavorite.status}
                     species={myFavorite.species}
                     gender={myFavorite.gender}
                     origin={myFavorite.origin}
                     image={myFavorite.image}
                     onClose={onClose}
                  />
               ))
            }
         </div>
      </div>
   );
}

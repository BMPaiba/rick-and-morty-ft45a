import { NavLink } from "react-router-dom";
import SearchBar from "../searchbar/SearchBar";
import style from "./Nav.module.css";
import { FaBars } from "react-icons/fa";
import { IoPersonAdd } from "react-icons/io5";

export default function Nav(props) {
  return (
    <>
      <div className={style.container}>
        <div>
          <NavLink to="/home">
            <button className={style.container__button}>Home</button>
          </NavLink>
          <NavLink to="/favorites">
            <button className={style.container__button}>Favorites</button>
          </NavLink>
          <NavLink to="/about">
            <button className={style.container__button}>About Me</button>
          </NavLink>
        </div>
        <div>
          <button
            onClick={props.logout}
            className={style.container__button}
            id={style.container__button_logout}
          >
            Logout
          </button>
        </div>
      </div>
      <div className={style.searchbar}>
        <SearchBar onSearch={props.onSearch} onClear={props.onClear} />
      </div>

      <div className={style.mobile}>
        <div className={style.searchbar_mobile}>
          <SearchBar onSearch={props.onSearch} onClear={props.onClear} />
        </div>

        <div>
          <FaBars className={style.mobile_menu} />
        </div>
        <div className={style.searchbar}>
          <SearchBar onSearch={props.onSearch} onClear={props.onClear} />
        </div>
      </div>
    </>
  );
}

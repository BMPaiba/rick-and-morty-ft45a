import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Clear, removeFav } from "./redux/actions.js";
import About from "./components/about/About.jsx";
import Cards from "./components/cards/Cards.jsx";
import Detail from "./components/detail/Detail.jsx";
import Favorites from "./components/favorites/Favorites.jsx";
import Form from "./components/form/Form.jsx";
import Nav from "./components/nav/Nav.jsx";
import NotFound from "./components/notFound/NotFound.jsx";
import Swal from "sweetalert";

const URL = "https://rym2.up.railway.app/api/character";
const API_KEY = "henrystaff";
const URL_API = import.meta.env.VITE_URL_API;


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    const characterId = characters.filter((char) => char.id === Number(id));
    if (characterId.length) {
      return alert(`${characterId[0].name} ya existe!`);
    }
    try {
      const { data } = await axios(
        `${URL_API}/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters([data, ...characters]);
        navigate("/home");
      } else {
        Swal("¡El id debe ser un número entre 1 y 826!");
      }
    } catch (error) {
      // throw error;
      Swal({
        title: "Id not found",
        text: "The id must be a number between 1 and 826!",
        icon: "warning",
        button: "OK",
        timer: 2000,
      });
    }
    // console.log('todos los personajes',characters);
  };

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
    dispatch(removeFav(id));
  };

  const rutaActual = window.location.pathname;

  // Verifica la ruta y ejecuta la lógica correspondiente
  if (rutaActual === "/ruta-especifica") {
    // Mostrar la confirmación solo si estás en una ruta específica
    const confirmacion = Swal({
      title: "Delete all",
      text: "Are you sure you want to delete all cards",
      icon: "error",
      buttons: ["NO", "YES"], // El "YES" siempre es la segunda opción, porque es true
    }).then((respuesta) => {
      if (respuesta) {
        setCharacters([]);
        dispatch(Clear());
        navigate("/home");
      } else {
        Swal({
          title: "Action canceled",
          icon: "success",
          timer: 1000,
        });
      }
    });
  }

  const onClear = () => {
    if(characters.length > 0){
    const confirmacion = Swal({
      title: "Delete all",
      text: "Are you sure you want to delete all cards",
      icon: "error",
      buttons: ["NO", "YES"], //el si siempre es la segunda opcion, porque es true
    }).then((respuesta) => {
      if (respuesta) {
        setCharacters([]);
        dispatch(Clear());
        navigate("/home");
      } else {
        Swal({
          title: "Action canceled",
          icon: "success",
          timer: 1000,
        });
      }
    });
  }
  };

  //* Login
  const [access, setAccess] = useState(false);
  const EMAIL = "hola@gmail.com";
  const PASSWORD = "asd123";

  const login = async (userData) => {
    const { email, password } = userData;
    try {
      const URL = `${URL_API}/rickandmorty/login/`;
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      // throw error;
      alert(error.message);
    }
  };

  function logout() {
    const confirmacion = Swal({
      title: "Log Out",
      text: "Are you sure you want to log out?",
      icon: "warning",
      buttons: ["NO", "YES"], //el si siempre es la segunda opcion, porque es true
    }).then((respuesta) => {
      if (respuesta) {
        setAccess(false);
        navigate("/");
      } else {
        Swal({
          title: "Thank you for staying here",
          icon: "success",
          timer: 1500,
        });
      }
    });
  }

  useEffect(() => {
    //* Logueo automático
    // !access && navigate("/home");
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {location.pathname !== "/" ? (
        <Nav onSearch={onSearch} logout={logout} onClear={onClear} />
      ) : null}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/detail/:id"
          element={<Detail characters={characters} />}
        />
        <Route path="/favorites" element={<Favorites onClose={onClose} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

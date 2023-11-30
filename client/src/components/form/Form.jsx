import React, { useState } from "react";
import validation from "../../utils/validation";
import styles from "./form.module.css";

export default function Form(props) {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
    setErrors(
      validation({
        ...userData,
        [name]: value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.login(userData);
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        {/* <label>Email: </label> */}
        <input
          className={styles.input}
          type="text"
          key="email"
          name="email"
          value={userData.email}
          placeholder="Ingresar email..."
          onChange={handleChange}
        />
        <p style={{ color: "coral" }}>{errors.email ? errors.email : null}</p>

        {/* <label>Password: </label> */}
        <input
          className={styles.input}
          type="password"
          key="password"
          name="password"
          value={userData.password}
          placeholder="Ingresar password..."
          onChange={handleChange}
        />
        <p style={{ color: "coral" }}>{errors.password && errors.password}</p>

        <button
          className={styles.button}
          type="submit"
          disabled={errors.email || errors.password}
        >
          Ingresar
        </button>
      </form>
    </div>
  );
}

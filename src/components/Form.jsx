import React, { useState } from "react";
import validation from "../utilities/validation";


export default function Form({login}) {
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

  const handleSubtim = (event) => {
    event.preventDefault()
    login(userData)
  }

  return (
    <div>
      <form onSubmit={handleSubtim}>
        {/* <label htmlFor="email">Email:</label> */}
        <input
          type="text"
          name="email"
          placeholder="Email..."
          value={userData.email}
          onChange={handleChange}
        />
        <p style={{color:"coral"}}>{ errors.email ? errors.email : null }</p>
        <br />
        <hr />
        {/* <label htmlFor="password" >Password:</label> */}
        <input
          type="password"
          name="password"
          placeholder="Password..."
          value={userData.password}
          onChange={handleChange}
        />
        <p style={{color:"coral"}}>{ errors.password ? errors.password : null }</p>
        <br />
        <hr />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

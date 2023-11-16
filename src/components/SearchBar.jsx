import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
   setId(event.target.value)
  };
  const handleClick = (event) => {
    event.preventDefault();
    props.onSearch(id)
    setId('')
  }

  return (
    <div>
      <input type="text" value={id} onChange={handleChange} placeholder="Id..." />
      <button onClick={handleClick} >Agregar</button>
      <button className='showButton' onClick={()=>props.onSearch(Math.ceil(Math.random()*826))}>Add random</button>
    </div>
  );
}

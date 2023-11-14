import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (event) => {
   setId(event.target.value)
   // alert(event.target.value)
  };
  return (
    <div>
      <input type="search"  value={id} onChange={handleChange} />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
    </div>
  );
}

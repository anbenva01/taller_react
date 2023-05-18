import { async } from 'q';
import React from 'react'

const PeticionApi = () => {

  const [personajes, setPersonajes] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(1);

  const obtenerPersonajes = async() =>{
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon");
      const {results} = await res.json();
      setPersonajes(results);
      console.log(results);
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div>
      <h1>POKEMON</h1>
      <button onClick={obtenerPersonajes}>Traer elemento</button>
      <button>Anterior</button>
      <button>Siguiente</button>
      {
        personajes.map(({name, url}) => (
          <div>
            <h4>{name}</h4>
            <img src='{url}' alt='{name}'></img>
          </div>
        ))
      }

    

    </div>
  )
}

export default PeticionApi
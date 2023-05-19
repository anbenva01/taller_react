import { async } from 'q';
import React from 'react'

const PeticionApi = () => {

  const [personajes, setPersonajes] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(1);

  const obtenerPersonajes = async() =>{
    try {
      //const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      //const res = await fetch("https://hp-api.onrender.com/api/characters");
      //const res = await fetch("https://api.sampleapis.com/simpsons/characters");
      //const res = await fetch("https://rickandmortyapi.com/api/character/?page=${paginacion}");
      //const res = await fetch("https://spapi.dev/api/characters");
      //const res = await fetch("https://api.thecatapi.com/v1/images/search");
      const res = await fetch("https://apisimpsons.fly.dev/api/personajes");
      const {results} = await res.json();
      setPersonajes(results);
      console.log(results);
    } catch (error) {
      console.log(error)
    }
    
  }

  return (
    <div>
      <h1>PERSONAJES DE HARY POTTER</h1>
      <button onClick={obtenerPersonajes}>Traer personajes</button>
      <button>Anterior</button>
      <button>Siguiente</button>
      {
        personajes.map(({id, name}) => (
          <div key={id}>
            <h4>{name}</h4>
          </div>
        ))
      }

    

    </div>
  )
}

export default PeticionApi
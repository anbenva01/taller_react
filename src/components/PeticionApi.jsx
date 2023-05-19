import { async } from 'q';
import React from 'react'

const PeticionApi = () => {

  const [personajes, setPersonajes] = React.useState([]);
  const [paginacion, setPaginacion] = React.useState(0);

  const obtenerPersonajes = async() =>{
    try {
      //const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      //const res = await fetch("https://hp-api.onrender.com/api/characters");
      //const res = await fetch("https://api.sampleapis.com/simpsons/characters");
      const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginacion} `);
      //const res = await fetch("https://spapi.dev/api/characters");
      //const res = await fetch("https://api.thecatapi.com/v1/images/search");
      //const res = await fetch("https://apisimpsons.fly.dev/api/personajes");
      const {results} = await res.json();
      setPersonajes(results);
      console.log(results);
    } catch (error) {
      console.log(error)
    }
    
  }

  const siguiente = async() => {
    setPaginacion(paginacion+1);
    obtenerPersonajes();
  }
  const anterior = async() => {
    setPaginacion(paginacion-1);
    obtenerPersonajes();
  }

  return (
    <div>
      <h1>PERSONAJES DE RICK AND MORTY</h1>
      <button onClick={obtenerPersonajes}>Traer personajes</button>
      <button onClick={anterior}>Anterior</button>
      <button onClick={siguiente}>Siguiente</button>
      {
        personajes.map(({id, name,image,gender}) => (
          <div key={id}>
            <h4>Nombre: {name}</h4>
            <h4>Género: {gender}</h4>
            <h4>Imagen: </h4>
            <img src={image} alt={name}></img>
          </div>
        ))
      }

    

    </div>
  )
}

export default PeticionApi
import React from 'react'

const Variables = () => {
    const saludo = "Hola mundo";
    const imagen = "";
    const texto_alt = "Es una imagen";
  return (
    <div><h1>{ saludo }</h1>
    <img src='{imagen}' alt='{texto_alt}'></img>
    </div>
    
  )
}

export default Variables
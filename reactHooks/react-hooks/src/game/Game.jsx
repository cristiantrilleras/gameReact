import React, { useState } from 'react';
import'./Game.css'

const opciones = ['piedra', 'papel', 'tijera'];

export const Game = () => {
  const [jugador, setJugador] = useState(null);
  const [computadora, setComputadora] = useState(null);
  const [resultado, setResultado] = useState(null);

  const jugar = (opcionElegida) => {
    // Computadora elige una opción al azar
    const opcionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

    // Determinar el resultado del juego
    if (opcionElegida === opcionComputadora) {
      setResultado('Empate');
    } else if (
      (opcionElegida === 'piedra' && opcionComputadora === 'tijera') ||
      (opcionElegida === 'papel' && opcionComputadora === 'piedra') ||
      (opcionElegida === 'tijera' && opcionComputadora === 'papel')
    ) {
      setResultado('Ganaste');
    } else {
      setResultado('Perdiste');
    }

    // Actualizar las elecciones
    setJugador(opcionElegida);
    setComputadora(opcionComputadora);
  };

  return (
    <div className='game'>
      <h1 className='text-4xl bg-green-300 mb-5' >QUE EMPIEZE EL JUEGO!</h1>
      <div className='botones'>
        <button onClick={() => jugar('piedra')}>Piedra</button>
        <button onClick={() => jugar('papel')}>Papel</button>
        <button onClick={() => jugar('tijera')}>Tijera</button>
      </div>
      <div>
        {jugador && <p className='bg-green-600'>Tu elección: {jugador}</p>}
        {computadora && <p>Elección de la computadora: {computadora}</p>}
        {resultado && <p className='text-green-300'>Resultado: {resultado}</p>}
      </div>
    </div>
  );
};


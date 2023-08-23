import React, { useState, useEffect } from 'react';

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [textColor, setTextColor] = useState('text-sky-400'); // Color de texto inicial

  const handleAdd = () => setCount(count + 1);
  const handleSubtract = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  useEffect(() => {
    // Actualizar el color del texto cuando count llega a 10
    if (count >= 10) {
      setTextColor('text-red-500'); // Cambia el color a rojo cuando count es igual a 10
      if (count>=20) {
        setTextColor('text-green-500');
        if (count>=25) {
          setTextColor('text-orange-500');
      }
    } 
  }else {
      setTextColor('text-sky-400'); // Vuelve al color inicial en otros casos
    }
  }, [count]);

  return (
    <>
      <p className={`text-4xl ${textColor}`}>Contador: {count}</p>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleAdd}>
        Incrementar
      </button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleSubtract}>
        Restar
      </button>
      <button className='w-40 text-center text-sky-700 bg-gray-400 rounded-2xl m-4' onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

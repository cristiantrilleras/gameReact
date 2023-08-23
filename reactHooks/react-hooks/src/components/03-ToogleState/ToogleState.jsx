
import React, { useState } from 'react';

export const ToogleState = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className={`p-8 ${isOn ? 'bg-green-500' : 'bg-red-500'} text-white text-center`}>
      <p>Estado: {isOn ? 'Encendido' : 'Apagado'}</p>
      <button
        className={`rounded px-4 py-2 mt-2 ${isOn ? 'bg-red-500' : 'bg-green-500'} text-white`}
        onClick={() => setIsOn(!isOn)}
      >
        Toggle
      </button>
    </div>
  );
};


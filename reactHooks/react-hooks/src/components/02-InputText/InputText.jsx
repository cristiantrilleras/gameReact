import React, { useState } from 'react';

export const InputText = () => {

  const [text, setText] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('white');
  const onChange= (e) => setText(e.target.value) 

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setBackgroundColor('#FFD700'); // Cambiar el color de fondo al presionar Enter
    }
  };

  return (
    <div style={{ backgroundColor }}>
      <p>Texto ingresado: {text}</p>
      <input
        placeholder='Ingresa el texto'
        className='w-96 bg-sky-300 p-2'
        type="text"
        value={text}
        onChange={onChange}
        onKeyPress={handleKeyPress}
      />
    </div>
  );
}

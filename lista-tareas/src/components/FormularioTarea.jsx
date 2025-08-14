import { useState } from 'react';

function FormularioTarea({ agregarTarea }) {
  const [texto, setTexto] = useState('');

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (texto.trim()) {
      agregarTarea(texto);
      setTexto('');
    }
  };

  return (
    <form onSubmit={manejarSubmit} className="formulario-tarea">
      <input
        type="text"
        value={texto}
        onChange={(e) => setTexto(e.target.value)}
        placeholder="Escribe una tarea..."
      />
      <button type="submit">Agregar</button>
    </form>
  );
}

export default FormularioTarea;
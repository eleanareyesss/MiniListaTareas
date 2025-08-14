import { useState } from 'react';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Aprender useState', completada: false }
  ]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = (e) => {
    e.preventDefault();
    if (nuevaTarea.trim()) {
      setTareas([...tareas, {
        id: Date.now(),
        texto: nuevaTarea,
        completada: false
      }]);
      setNuevaTarea('');
    }
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      
      <form onSubmit={agregarTarea} className="formulario-tarea">
        <table>
          <tbody>
            <tr>
              <td>
                <input
                  type="text"
                  value={nuevaTarea}
                  onChange={(e) => setNuevaTarea(e.target.value)}
                  placeholder="Escribe una tarea..."
                />
              </td>
              <td>
                <button type="submit">Agregar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>

      <ul className="lista-tareas">
        {tareas.map((tarea) => (
          <li key={tarea.id}>
            {tarea.texto}
            <button onClick={() => eliminarTarea(tarea.id)}>×</button>
          </li>
        ))}
      </ul>

      <p className="contador"><strong>Total:</strong> {tareas.length} tareas</p>
    </div>
  );
}

export default App;
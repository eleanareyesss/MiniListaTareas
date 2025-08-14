import { useState } from 'react';
import FormularioTarea from './components/FormularioTarea';
import ListaTareas from './components/ListaTareas';
import './App.css';

function App() {
  const [tareas, setTareas] = useState([
    { id: 1, texto: 'Aprender React', completada: false },
    { id: 2, texto: 'Aprender useState', completada: false }
  ]);

  const agregarTarea = (texto) => {
    const nuevaTarea = {
      id: Date.now(),
      texto,
      completada: false
    };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (id) => {
    setTareas(tareas.filter(tarea => tarea.id !== id));
  };

  return (
    <div className="app">
      <h1>Lista de Tareas</h1>
      <FormularioTarea agregarTarea={agregarTarea} />
      <ListaTareas tareas={tareas} eliminarTarea={eliminarTarea} />
      <p className="contador">Total: {tareas.length} tareas</p>
    </div>
  );
}

export default App;
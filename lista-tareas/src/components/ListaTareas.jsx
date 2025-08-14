function ListaTareas({ tareas, eliminarTarea }) {
  return (
    <ul className="lista-tareas">
      {tareas.map((tarea) => (
        <li key={tarea.id}>
          {tarea.texto}
          <button onClick={() => eliminarTarea(tarea.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}

export default ListaTareas;
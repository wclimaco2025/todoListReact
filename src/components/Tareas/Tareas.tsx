import { useState, useEffect } from 'react';
import { getTasks, updateTask } from '../../services/apiservices.supabase';
import type { PropsList, Todo } from '../../types/todo.type';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import emptyTasksSvg from '../../assets/empty-tasks.svg'; // Importa la nueva imagen


export const Tareas = ({ refreshKey }: PropsList) => {
  // Estados para las tareas
  const [tasks, setTasks] = useState<Todo[]>([]);
  //Estado para carga
  const [loading, setLoading] = useState<boolean>(true);

 useEffect(() => {
    const fetchTasks = async () => {
      setLoading(true);
      const { data } = await getTasks();
      setTasks(data ?? []);
      setLoading(false);
    };
    fetchTasks();
  }, [refreshKey]); // se ejecuta cada vez que refreshKey cambia

  if (loading) {
    return <LoadingSpinner/>;
  }

  if (!tasks || tasks.length === 0) {
    return( 
      <div className="flex flex-col items-center justify-center h-full text-gray-600 text-center mt-8">
        <img
          src={emptyTasksSvg}
          alt='No tasks'
          className="w-48 h-48 mb-4"
        />
        <h2 className='text-3xl font-bold text-gray-800'>Crea tu primera tarea</h2>
        <p className="mt-2 text-lg">Parece que no tienes tareas pendientes. ¡Es un buen momento para empezar!</p>
      </div>
    )
  }

  return (
     <>
     <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">Listado de Tareas</h2>
      <div className="grid grid-cols-1 mx-auto mt-3 mb-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 h-full">
        {tasks.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <h2 className='text-lg font-semibold'>Id: {task.id}</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Descripción: {task.descripcion}</h3>
            
            {
            //Operador ternario para mostrar un mensaje de Tarea terminada o el boton para completarla
            task.estado === "TERMINADO" ? (
              <p className="text-green-500 font-bold">Estado: Terminado</p>
            ) : (
            <button 
              onClick={async () => {
                try {
                  const { data, error: updateError } = await updateTask(task);
                  if (!updateError) {
                    console.log('Tarea actualizada con éxito:', data);
                    //Actualizamos el estado de la tarea en el frontend
                    setTasks(tasks.map((t) => (t.id === task.id ? { ...t, estado: "TERMINADO" } : t)));
                  } else {
                    console.error('Error al actualizar la tarea:', updateError);
                  }
                } catch (err: any) {
                  console.error("Error al actualizar la tarea:", err.message);
                }
              }} 
              className="mt-auto px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Terminar
            </button>
          )}
        </div>
      ))}
      </div>
     </>
  );
}

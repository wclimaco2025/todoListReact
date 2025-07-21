import { createTask } from "../../services/apiservices.supabase";
import type { Props, TodoNew } from "../../types/todo.type";

export const Tarea = ({ onTaskAdded }: Props) => {

    const addTask =async (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        const formData = new FormData(event.target as HTMLFormElement);
        const taskDescription = formData.get('taskInput')?.toString() || '';
        if (taskDescription.trim().length>=1) {
            console.log('Descripción de la tarea:', taskDescription);
        
            const task:TodoNew ={
                descripcion:taskDescription,
                estado:'PENDIENTE',
            }
            const {data,error} = await createTask(task);
            if (!error) {
                console.log('Tarea creada con éxito:', data);
                 onTaskAdded(); // notificamos al padre(APP.tsx) del cambio
                (event.target as HTMLFormElement).reset(); // limpiar input
            } else {
                console.error('Error al crear la tarea:', error);
            }
      }
    }
  return (
    <>
        <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Agregar Nueva Tarea</h2>
            <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-4">
                <input 
                    name="taskInput"
                    className="flex-grow p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 placeholder-gray-400"
                    placeholder="Escribe una nueva tarea..."
                    required
                />  
                <button 
                    type="submit"
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-300 ease-in-out transform hover:scale-105"
                >
                    Agregar
                </button>
            </form>
        </div>
  </>
  )
}

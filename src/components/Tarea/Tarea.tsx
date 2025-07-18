import { createTask, getTasks } from "../../services/apiservices.supabase";
import type { TodoNew } from "../../types/todo.type";

export const Tarea = () => {
    const addTask =async (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(event);
        const formData = new FormData(event.target as HTMLFormElement);
        const taskDescription = formData.get('taskInput')?.toString() || '';
        if (taskDescription.trim().length>=1) {
            console.log('Descripción de la tarea:', taskDescription);
        
            const task:TodoNew ={
                descripcion:taskDescription,
                estado:'PENDIENTE',
            }
            const newTask = await createTask(task);
            if (newTask) {
                console.log('Tarea creada con éxito:', newTask);
                await getTasks();
            } else {
                console.error('Error al crear la tarea');
            }
      }
    }
  return (
    <>
       <h2 className="text-2xl font-bold text-gray-800"> Agregar Tarea</h2>
        <form onSubmit={addTask} className="flex gap-2 mt-8">
            <input 
                type="text" 
                name="taskInput"
                className="flex-grow p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe una nueva tarea..."
                id="taskInput"
            />  
            <button 
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
                Agregar
            </button>
        </form>
  </>
  )
}

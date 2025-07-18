import { use } from 'react';
import { getTasks, updateTask } from '../../services/apiservices.supabase';
import type { Todo } from '../../types/todo.type';

// Promesa sin consumir
const fetchTasks =  getTasks();

export const Tareas = () => {
   // Usando el metodo use para consumir la tarea
   const tasks:Todo[]|null =use(fetchTasks);

   // const [tasks, setTasks] = useState<Todo[]>([]);

  // Mostrar las tareas al cargar la página
 /* useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data: Todo[]| null = await getTasks();
        setTasks(data??[]);

      } catch (error) {
        console.error("Error fetching tareas:", error);
      }
    };
    fetchTasks();
  }, []);*/

  return (
     <>
     <h2 className="text-3xl font-bold text-gray-800 text-center mt-8">Listado de Tareas</h2>
      <div className="grid grid-cols-1 mx-auto my-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {tasks?.map((task) => (
          <div key={task.id} className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between">
            <h2>Id: {task.id}</h2>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Descripción: {task.descripcion}</h3>
            <button 
              onClick={() => updateTask(task)} 
              className="mt-auto px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Completar
            </button>
        </div>
      ))}
      </div>
     </>
  );
}

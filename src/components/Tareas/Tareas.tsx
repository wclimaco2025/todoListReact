import { use } from 'react';
import { getTasks } from '../../services/apiservices.supabase';
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
    <section className='container'>
      {tasks?.map((task) => (
        <li key={task.id}>{task.descripcion}</li>
      ))}
    </section>
  );



 /*  return (
    <>
      <section className="flex justify-center items-center border-2 py-4 border-indigo-700">
        <div className="flex justify-center items-center">
          <h3 className="text-2xl">Tareas</h3>
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Tareas</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget felis eu turpis tincidunt ultrices. Nullam eget felis eu turpis tincidunt ultrices. Nullam eget felis eu turpis tincidunt ultrices.</p>
            </div>
          </div>
        </div>
      </section>
    </>
    
  ) */
}

import { supabase } from "../api/api.supabase";
import type { Todo } from "../types/todo.type";

// Obtiene todas las tareas
export  const getTasks = async () => {
  // Usando try catch para manejar errores
  try{const { data } = await supabase.from("Tasks").select();
    return data;
  }catch(error){
    throw new Error("Error fetching tareas");
  }
}
// Obtiene la tarea por Id
export  const getTask = async (id: string) => {
  // Usando try catch para manejar errores
  try{const { data } = await supabase.from("Tasks").select().eq("id", id);
    return data;
  }catch(error){
    throw new Error("Error obteniendo una tarea");
  }
}
// Crea una tarea
export const createTask = async (task: Todo) => {
  // Usando try catch para manejar errores
  try{const { data } = await supabase.from("Tasks").insert(task);
    return data;
  }catch(error){
    throw new Error("Error creando una tarea");
  }
}
// Actualiza una tarea
export const updateTask = async (task: Todo) => {
  // Usando try catch para manejar errores
  try{const { data } = await supabase.from("Tasks").update(task).eq("id", task.id);
    return data;
  }catch(error){
    throw new Error("Error actualizando una tarea");
  }
}
// Elimina una tarea
export const deleteTask = async (id: string) => {
  // Usando try catch para manejar errores
  try{const { data } = await supabase.from("Tasks").delete().eq("id", id);
    return data;
  }catch(error){
    throw new Error("Error borrando una tarea");
  }
}

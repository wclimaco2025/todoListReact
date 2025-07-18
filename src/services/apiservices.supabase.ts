import { supabase } from "../api/api.supabase";
import type { Todo } from "../types/todo.type";

// Obtiene todas las tareas
export  const getTasks = async () => {
    const { data } = await supabase.from("Tasks").select();
    return data;
  }
// Obtiene la tarea por Id
export  const getTask = async (id: string) => {
    const { data } = await supabase.from("Tasks").select().eq("id", id);
    return data;
  }

  // Crea una tarea
  export const createTask = async (task: Todo) => {
    const { data } = await supabase.from("Tasks").insert(task);
    return data;
  }

  // Actualiza una tarea
  export const updateTask = async (task: Todo) => {
    const { data } = await supabase.from("Tasks").update(task).eq("id", task.id);
    return data;
  }

  // Elimina una tarea
  export const deleteTask = async (id: string) => {
    const { data } = await supabase.from("Tasks").delete().eq("id", id);
    return data;
  }

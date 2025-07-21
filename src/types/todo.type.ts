export interface Todo{
    id: number;
    descripcion: string;
    estado: 'PENDIENTE' | 'TERMINADO';
    created_at: Date;
}

export interface TodoNew{
    descripcion: string;
    estado: 'PENDIENTE';
}

export interface Props {
  onTaskAdded: () => void; // nueva prop para Tarea
}

export interface PropsList {
  refreshKey: number; // Prop para hacer refresh en listado 
}
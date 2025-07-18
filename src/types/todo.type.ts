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
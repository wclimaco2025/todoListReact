export interface Todo{
    id: string;
    descripcion: string;
    estado: 'PENDIENTE' | 'TERMINADO';
    created_at: Date;
}
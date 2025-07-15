export interface Todo{
    id: string;
    descripcion: string;
    estado: 'PENDIENTE' | 'EN PROCESO' | 'TERMINADO';
    created_at: Date;
}
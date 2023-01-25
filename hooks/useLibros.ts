import useSWR, { SWRConfiguration } from 'swr';
import { ICliente } from '../interfaces/clientes';
import { ILibro } from '../interfaces/libros';


export const useLibros = (url: string, config: SWRConfiguration = {}) => {
    const { data, error } = useSWR<ILibro[]>(`http://localhost:3000/api${url}`, config);
    console.log(data);
    return {
        libros: data || [],
        isLoading: !error && !data,
        isError: error
    }
}
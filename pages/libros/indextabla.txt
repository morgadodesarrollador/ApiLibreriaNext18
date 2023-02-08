import { Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { MainLayouts } from '../../layouts/MainLayouts';
import { useLibros } from '../../hooks/useLibros';
import { ILibro } from '../../interfaces/libros/ILibro';
import { LibrosList } from '../../components/libros/LibrosList';
import { Mundo } from '../../components';

const IndexLibrosPage = () => {
  const { libros, isLoading } = useLibros('/libros');
  console.log("l=", isLoading, "c=", libros);

  return (
    <MainLayouts>
      <h2>Sección de Libros</h2>
      <LibrosList libros = {libros} />
            {
                (isLoading)
                    ? <LibrosList libros = {libros} />
                    : <Mundo />
            }
        </MainLayouts>
  )
}

export default IndexLibrosPage;
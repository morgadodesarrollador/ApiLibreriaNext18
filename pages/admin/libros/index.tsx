import { Mundo } from '../../../components';
import { LibrosList } from '../../../components/libros';
import { useLibros } from '../../../hooks/useLibros';
import { MainLayouts } from '../../../layouts';

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
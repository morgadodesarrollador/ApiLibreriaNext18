

import { PublicLayouts } from '../../layouts/PublicLayouts';
import { LibrosCardList } from '../../components/libros';
import { useLibros } from '../../hooks/useLibros';

const IndexLibrosPage = () => {
  const { libros, isLoading } = useLibros('/libros');

  return (
    <PublicLayouts>
      <h2>Sección de Libros</h2>
      <LibrosCardList libros = {libros} />
    </PublicLayouts>
  )
}

export default IndexLibrosPage;
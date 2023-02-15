import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";
import { useLibros } from '../../hooks/useLibros';
import { LibroDetail } from '../../components/libros/LibroDetail';
import { ILibro } from '../../interfaces/libros/ILibro';

interface Props {
    isbn: string
}

const LibroPage = () => {
    const router = useRouter();
    console.log(router);
   
    const isbn = router.query;
    // renombrando la variable libros por libro
    const { libros:libro, isLoading } = useLibros(`/libros/${isbn.id}`);
    console.log(libro)
  return (
    <PublicLayouts> 
       <h2>detalle del libro {`${router.query.id}`} </h2>
        <LibroDetail libro={libro} />
        
    </PublicLayouts>
    
  )
}

export default LibroPage


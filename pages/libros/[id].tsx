import { useRouter } from "next/router";
import { FC } from "react"
import { MainLayouts, PublicLayouts } from "../../layouts";


interface Props {
    isbn: string
}

const ProductoPage = () => {
    const router = useRouter();
    const isbn = router.query;
    console.log(isbn)
  return (
    <PublicLayouts>
        <h2>Detalle del Producto { isbn.id}</h2>
    </PublicLayouts>
    
  )
}

export default ProductoPage


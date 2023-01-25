import { Grid } from "@mui/material";
import { FC } from "react"
import { ILibro } from '../../interfaces/libros/ILibro';

interface Props {
    libros: ILibro[]
}


export const LibrosCardList:FC<Props> = ({ libros }) => {
  return (
    <Grid container spacing={4}>

    </Grid>
  )
}

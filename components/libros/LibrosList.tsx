import { Grid } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC } from 'react';
import { ILibro } from '../../interfaces/libros/ILibro';


interface Props {
    libros: ILibro[]
}
export const LibrosList:FC<Props> = ({libros}) => {
  
  const colums: GridColDef[] = [
        { field: 'isbn', headerName: 'ISBN', width: 130},
        { field: 'title', headerName:'Titulo', width: 300 },
        { field: 'pageCount', headerName: 'Paginas', width: 100 },
        { field: 'precio', headerName: 'Precio', width: 100 },
        { field: 'status', headerName: 'Estado', width: 100 },
  ];
  const rows = libros;
  return (
            <Grid container>
               <Grid item xs={12} 
                  sx={{ 
                    height: 350, width: '80%',
                    boxShadow: 2,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                      color: 'primary.main',
                    },
                  }}>
                 <DataGrid 
                    columns={colums} rows={rows}
                    pageSize= {10}
                    // onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                    rowsPerPageOptions={[5, 10, 20]}
                    pagination
                    getRowId = {( row: ILibro ) => row.isbn}
                  />
               </Grid>
            </Grid>
  )
}

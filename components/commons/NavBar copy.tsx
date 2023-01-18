

import { AppBar, Link, Toolbar, Typography, Button, Box } from '@mui/material';
import NextLink from 'next/link';
import React from 'react'

export const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <Link href='/' passHref component={ NextLink }>
                <Typography variant='h6'> Librería</Typography>
            </Link>
            <Box flex={1} />
            <Box>
                <Link href='/libros' passHref component={ NextLink }>
                    <Button>Libros</Button>
                </Link>
                <Link href='/categorias' passHref component={ NextLink }>
                    <Button>Categorías</Button>
                </Link>
                <Link href='/editores' passHref component={ NextLink }>
                    <Button>Editores</Button>
                </Link>
            </Box>
            <Box flex={1} />
        </Toolbar>
    </AppBar>
  )
}











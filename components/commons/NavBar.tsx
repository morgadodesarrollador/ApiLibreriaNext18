import { AppBar, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import NextLink from 'next/link';

export const NavBar = () => {
  return (
    <AppBar>
        <Toolbar>
            <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                color="inherit"
                sx={{  }}
            >
                <MenuIcon />
            </IconButton>
            <Link href='/' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Home</Button>
            </Link>
            <Box flex={1} />
            
            <Box component="nav" 
                 sx= {{ display: { xs: 'none', sm: 'flex' }}} >
                    
                <Link href='/libros' passHref component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Libros</Button>
                </Link>
                <Link href='/categorias' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Categorias</Button>
                </Link>
                <Link href='/editores' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Editores</Button>
                </Link>
                <Link href='/clientes' component={ NextLink }>
                    <Button sx={{ color: 'white'}}>Clientes</Button>
                </Link>
            </Box>
            <Box flex={1} />
            <Box>
                Registro
            </Box>
        </Toolbar>
    </AppBar>
  )

  }

import { Button } from "@mui/material";
import { NextPage } from "next"
import { NavBar } from "../components/commons";
import { MainLayouts } from "../layouts";
 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  return (
    <MainLayouts>
        <h2>Hola Mundo mi primera página en un Layout</h2>
        <Button
            sx={{ backgroundColor:'red'}} variant='contained'
        > Hola Mundo</Button>
    </MainLayouts>
  )
}

export default indexPage

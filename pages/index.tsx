
import { NextPage } from "next"
import { PublicLayouts } from "../layouts";

 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  

  return (
    <PublicLayouts>
      <h1>Public Libreria Picasso </h1>
    </PublicLayouts>
  )
}

export default indexPage

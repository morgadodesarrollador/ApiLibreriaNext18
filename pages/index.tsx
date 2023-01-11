
import { NextPage } from "next"
import { Mundo } from '../components';
import { MainLayouts } from "../layouts";
 
//NextPage --> indica que es un proyecto Next y no Reac
const indexPage: NextPage = () => {
  return (
    <MainLayouts>
        <Mundo />
    </MainLayouts>
  )
}

export default indexPage

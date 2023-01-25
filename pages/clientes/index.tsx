import { Mundo } from "../../components";
import { ClientesList } from "../../components/clientes";
// import { ClientesList } from "../../components/clientes/clientesList1";
import { useClientes } from "../../hooks/useClientes";
import { MainLayouts } from '../../layouts/MainLayouts';

const IndexClientesPage = () => {

    const { clientes, isLoading } = useClientes('/clientes');
    console.log("l=", isLoading, "c=", clientes);
    return (
        <MainLayouts>
            <ClientesList clientes={clientes}/>
        </MainLayouts>
    )

//     return (
//         <MainLayouts>
//             {
//                 (isLoading)
//                     ? <ClientesList clientes = {clientes} />
//                     : <Mundo />
//             }
//         </MainLayouts>
//   )
}

export default IndexClientesPage;

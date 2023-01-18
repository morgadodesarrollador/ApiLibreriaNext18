import type { NextApiRequest, NextApiResponse } from 'next'
import { ICliente } from '../../../database/interfaces/clientes/IClientes';


type Data = 
    | { message: string }
    | ICliente




export default function (req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method){
        case 'GET':
            return getClientes(req, res)
        default:
            return res.status(400).json({
                message: 'Bad Request'
            })
    }
}



const getClientes = async (req: NextApiRequest, res: NextApiResponse<Data>) {
    res.status(200).json({ message: 'Example' })
}

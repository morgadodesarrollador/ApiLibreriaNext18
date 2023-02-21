import { FC, useReducer } from 'react';
import { AuthContext, authReducer  } from './';
import { IUser } from '../../interfaces/Users/IUser';
import libreriaApi from '../../api/LibreriaApi';
import Cookies from 'js-cookie';

export interface AuthState{
    isLoggedIn: boolean;
    user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}
interface Props {
    children: any
}

export const AuthProvider:FC<Props> = ({ children }) => {
    const [ state, dispatch ] = useReducer( authReducer, AUTH_INITIAL_STATE );
    

    const loginUser = async (email: string, password: string):Promise<boolean> => {
        try {
            const { data } = await libreriaApi.post('/auth/login', { email, password });
            const { token, user } = data;
           
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;

        } catch (error) { //credenciales falsas
            return false;
        }
    } 
    return (
        <AuthContext.Provider value={{
            ...state,
            //métodos propios
        }}>
            { children }
        </AuthContext.Provider>
    )
}
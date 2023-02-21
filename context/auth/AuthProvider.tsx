import { FC, useReducer } from 'react';
import { AuthContext, authReducer  } from './';
import { IUser } from '../../interfaces/Users/IUser';

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
    return (
        <AuthContext.Provider value={{
            ...state,
            //métodos propios
        }}>
            { children }
        </AuthContext.Provider>
    )
}
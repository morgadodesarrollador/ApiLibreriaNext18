
import { createContext } from 'react';
import { IUser } from '../../interfaces/Users/IUser';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IUser;
    //loginUser
    //regusterUser
}

export const AuthContext  = createContext( {} as ContextProps );
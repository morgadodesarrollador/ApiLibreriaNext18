
import { createContext } from 'react';
import { IUser } from '../../interfaces/Users/IUser';
import { IRespuestaApiAuth } from './interfaces/IRespuestaAuthApi';

interface ContextProps {
    isLoggedIn: boolean;
    user?: IUser;
    
    loginUser: (email: string, password: string) => Promise<boolean>;
    registerUser: (fullName: string, password: string, email: string) => Promise<IRespuestaApiAuth>
}

export const AuthContext  = createContext( {} as ContextProps );
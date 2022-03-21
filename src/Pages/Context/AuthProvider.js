import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';

export const AuthContex = createContext()

const AuthProvider = ({ children }) => {
      const allcontext = useFirebase()
      return (
            <AuthContex.Provider value={allcontext}>
                  {children}
            </AuthContex.Provider>
      );
};

export default AuthProvider;
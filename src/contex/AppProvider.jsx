"use client"
import React, { createContext, useState } from 'react';

export const AuthContex = createContext()

const AppProvider = ({children}) => {

    const [installApp, setInstallApp] = useState([])
    const shareContex = {installApp,setInstallApp}

    return <AuthContex.Provider value={shareContex}>
        {children}
    </AuthContex.Provider>
};

export default AppProvider;









// export const AppContex = createContext();

// const AppProvider = ({ children }) => {
//   const [installApp, setInstallApp] = useState([]);
//   const shardedData = { installApp, setInstallApp };
//   return (
//     <AppContex.Provider value={shardedData}>{children}</AppContex.Provider>
//   );
// };

// export default AppProvider;

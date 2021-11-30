import React, { useContext } from "react";
import { NavList } from "./NavList/NavList";

const ContextApp = React.createContext();
const ContextProvider = ({ children }) => {
    return (
        <ContextApp.Provider
            value={{
                NavList,
            }}
        >
            {children}
        </ContextApp.Provider>
    );
};
export const useGlobal = () => {
    return useContext(ContextApp);
};
export default ContextProvider;

import React, { useContext } from "react";
import { NavList } from "./NavList/NavList";
import { MenuList } from "./MenuList/MenuList";

const ContextApp = React.createContext();
const ContextProvider = ({ children }) => {
    return (
        <ContextApp.Provider
            value={{
                NavList,
                MenuList,
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

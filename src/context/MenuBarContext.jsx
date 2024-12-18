import {useState, createContext } from 'react';

const MenuContext = createContext();

export const MenuContextProvider = ({ children }) =>{
    const [showSideBar, setShowSideBar] = useState(true);

    const handleSideBar = () =>{
        setShowSideBar((val) => !val);
    }

    return (
        <MenuContext.Provider value={{showSideBar, handleSideBar, setShowSideBar}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext
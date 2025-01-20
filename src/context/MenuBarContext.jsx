import {useState, createContext } from 'react';

const MenuContext = createContext();

export const MenuContextProvider = ({ children }) =>{
    const [showSideBar, setShowSideBar] = useState(false);

    const handleSideBar = () =>{
        setShowSideBar((val) => !val);
    }

    const closeMenu = () =>{
        setShowSideBar(false);
    }

    return (
        <MenuContext.Provider value={{showSideBar, handleSideBar, setShowSideBar, closeMenu}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContext
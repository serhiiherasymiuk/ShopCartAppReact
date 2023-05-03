import { createContext, useState } from "react";

export const ListContext = createContext({ 
    list: [],
    setList: () => null,
    clearList: () => null
});

export const ListProvider = ({ children }) => {
    const [list, setList] = useState([]);

    const clearList = () => list = [];

    const value = { list, setList, clearList };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
import { useEffect, useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    
    useEffect(() => {
        const getData = async () => {
            const fetched = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${name}&page=1`
            );
            const res = await fetched.json();
            setData([...res.results]);
        };

        getData();
    }, [name]);

    return (
        <DataContext.Provider value={{ data, setName }}>
            {children}
        </DataContext.Provider>
    );
};

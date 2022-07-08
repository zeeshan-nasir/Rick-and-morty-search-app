import { useEffect, useState } from "react";
import { createContext } from "react";

export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {
    const [data, setData] = useState([]);
    const [name, setName] = useState("");
    const [page, setPage] = useState(1);

    const getData = async () => {
        const fetched = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${name}&page=${page}`
        );
        const res = await fetched.json();
        setData([...new Set([...data, ...res.results])]);
    };

    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name, page]);

    return (
        <DataContext.Provider value={{ data, setData, setName, page, setPage }}>
            {children}
        </DataContext.Provider>
    );
};

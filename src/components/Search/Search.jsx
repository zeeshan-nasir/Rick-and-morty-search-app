import React, { useContext, useEffect, useState } from "react";
import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";
import { DataContext } from "../../contexts/DataContext";

const Search = () => {
    const [name, setName] = useState("");
    const { setData } = useContext(DataContext);

    useEffect(() => {
        const getData = async () => {
            const fetched = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${name}`
            );
            const res = await fetched.json();
            setData([...new Set([...res.results])]);
        };

        getData();
    }, [name, setData]);

    const debounce = (fn, delay) => {
        let timer;
        return (e) => {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(() => {
                fn(e);
            }, delay);
        };
    };

    const handleChange = debounce((e) => setName(e.target.value), 500);

    return (
        <div className="search-div">
            <AiOutlineSearch
                className="search-icon"
                size={19}
                color="rgb(179,190,209)"
            />
            <input
                onChange={handleChange}
                className="search-field"
                type="text"
                placeholder="Search for a contact"
            />
        </div>
    );
};

export default Search;

import React from "react";
import "./search.css";
import { AiOutlineSearch } from "react-icons/ai";

const Search = () => {
    return (
        <div className="search-div">
            <AiOutlineSearch
                className="search-icon"
                size={19}
                color="rgb(179,190,209)"
            />
            <input
                className="search-field"
                type="text"
                placeholder="Search for a contact"
            />
        </div>
    );
};

export default Search;

import React from "react";
// import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { DataContext } from "../../contexts/DataContext";
import DetailedUserCard from "../DetailedUserCard/DetailedUserCard";
import "./basicUserCard.css";

const BasicUserCard = () => {
    const [detailedData, setDetailedData] = useState({
        gender: "",
        id: "",
        image: "",
        location: {
            name: "",
        },
        name: "",
        origin: {
            name: "",
        },
        species: "",
        status: "",
    });

    const [display, setDisplay] = useState(false);

    const { data } = useContext(DataContext);

    return (
        <div>
            <div
                className="basic-card-container"
                style={{ filter: display ? "blur(3px)" : "blur(0px)" }}
            >
                {data.map((e) => {
                    return (
                        <div
                            onClick={() => {
                                setDetailedData(e);
                                setDisplay(true);
                            }}
                            key={e.id}
                            className="basic-card"
                        >
                            <div className="basic-card-leftDiv">
                                <img
                                    className="basic-card-profilePic"
                                    src={e.image}
                                    alt=""
                                />
                                <p className="basic-card-name">{e.name}</p>
                            </div>
                            <div className="basic-card-rightDiv">
                                <img
                                    className="basic-card-status"
                                    src={
                                        e.status === "Alive"
                                            ? "https://www.clipartmax.com/png/full/133-1336004_play-the-adventures-of-green-dot-on-gamesalad-arcade-green-dot-icon.png"
                                            : e.status === "Dead"
                                            ? "https://www.clipartmax.com/png/full/171-1716091_file-locator-dot-svg-dark-red-dot-png.png"
                                            : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png"
                                    }
                                    alt=""
                                />

                                <p className="basic-card-statusSize">
                                    {e.status.charAt(0).toUpperCase() +
                                        e.status.slice(1)}{" "}
                                    - {e.species}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div
                style={{ display: display ? "block" : "none" }}
                className="detailed-card-in-basic"
            >
                <DetailedUserCard obj={detailedData} setDisplay={setDisplay} />
            </div>
        </div>
    );
};

export default BasicUserCard;

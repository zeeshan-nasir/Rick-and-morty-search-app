import React from "react";
import "./detailedUserCard.css";
import { ImCross } from "react-icons/im";

const DetailedUserCard = ({ obj, setDisplay }) => {
    return (
        <div key={obj.id} className="detailed-card-container">
            <div className="detailed-card-upperDiv">
                <div className="detailed-card-upperDiv-left">
                    <img
                        className="detailed-card-profilePic"
                        src={obj.image}
                        alt=""
                    />
                </div>
                <div className="detailed-card-upperDiv-right">
                    <div>
                        <p className="detailed-card-name">{obj.name}</p>
                    </div>
                    <div className="detailed-card-statusDiv">
                        <img
                            className="detailed-card-status"
                            src={
                                obj.status === "Alive"
                                    ? "https://www.clipartmax.com/png/full/133-1336004_play-the-adventures-of-green-dot-on-gamesalad-arcade-green-dot-icon.png"
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Location_dot_grey.svg/1024px-Location_dot_grey.svg.png"
                            }
                            alt=""
                        />
                        <p className="detailed-card-statusSize">
                            {obj.status} - {obj.species}
                        </p>
                    </div>
                </div>
            </div>
            <div className="detailed-card-lowerDiv">
                <div>
                    <p className="detailed-card-lowerDiv-greyText">Gender</p>
                    <p className="detailed-card-lowerDiv-blackText">
                        {obj.gender}
                    </p>
                </div>
                <div>
                    <p className="detailed-card-lowerDiv-greyText">Location</p>
                    <p className="detailed-card-lowerDiv-blackText">
                        {obj.location.name}
                    </p>
                </div>
                <div>
                    <p className="detailed-card-lowerDiv-greyText">Species</p>
                    <p className="detailed-card-lowerDiv-blackText">
                        {obj.species}
                    </p>
                </div>
                <div>
                    <p className="detailed-card-lowerDiv-greyText">Origin</p>
                    <p className="detailed-card-lowerDiv-blackText">
                        {obj.origin.name}
                    </p>
                </div>
            </div>
            <div
                onClick={() => {
                    setDisplay(false);
                }}
                className="detailed-card-iconDiv"
            >
                <ImCross size={15} color="rgb(153, 156, 168)" />
            </div>
        </div>
    );
};

export default DetailedUserCard;

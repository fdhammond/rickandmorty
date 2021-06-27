import React from "react";

const Characters = ({ name, status, gender, image }) => {

    return (
        <div>
            <h2>Characters</h2>
            <p>{name}</p>
            <p>{status}</p>
            <p>{ gender }</p>
            <img src={image} alt="" />
        </div>
    );
}

export default Characters;
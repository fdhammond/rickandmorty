import React from "react";
import styled from 'styled-components'

const Characters = ({ name, status, gender, image, species, origin }) => {

    return (

        <Wrapper>
            <ItemImage>
            <img src={image} alt="" />
            </ItemImage>
            <ItemText>
            <h2>Character</h2>
            <p>Name: {name}</p>
            <p>Status: {status}</p>
            <p>Gender: {gender}</p>
            <p>Species: {species}</p>
            <p>Origin: {origin.name}</p>
            </ItemText>
        </Wrapper>

    );
}

export default Characters;

const Wrapper = styled.div`
    display: flex;
    justify-content : center;
    align-self: center;
    flex-wrap: wrap;
    border: 4px solid black;
    max-width: 450px;
    margin: 12px;
    background-color: #83FF61;

    `

const ItemText = styled.div`
    font-size: 1.2em;
    text-aling: center;
    color: black;
`


const ItemImage = styled.div`
    margin: 24px;
`

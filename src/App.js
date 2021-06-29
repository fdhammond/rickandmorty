import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import styled from 'styled-components';
import { FaHouseDamage } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
//import { AiTwotoneBug } from "react-icons/ai";
import "./index.css";
import Home from "./components/Home";
import Characters from "./components/Characters";


function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
  const CHARACTERS_API = `https://rickandmortyapi.com/api/character`
    getCharacters(CHARACTERS_API)
  }, []);

  const getCharacters = (API) => {
    async function fetchData() {
      const charactersResp = await fetch(API);
      const data = await charactersResp.json();
      setCharacters(data.results);
      console.log(data.results)
    }
    fetchData();
  };

  return (
    <div className="App">
      <Router>
        <header>
          <div className="home-nav">
            <button className="home-button">
              <Link to="/">
                <FaHouseDamage />
              </Link>
              <Link to="/characters">
                <BiCameraMovie />
              </Link>
            </button>
          </div>
        </header>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/characters" exact>
              <CharactersTitle>
                <h2>Characters</h2>
              </CharactersTitle>
            <CharactersContainer>
          {characters.length > 0 &&
              characters.map((character) => <Characters key={character.id} {
              ...character
              } />)}
            </CharactersContainer>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;


const CharactersContainer = styled.div`
display: flex;
justify-content: center;
align-content: center;
align-items: center;
flex-wrap: wrap;
max-width: 100%;
height: auto;
margin: 20px;
`
const CharactersTitle = styled.div`
  font-size: 32px;
  display: flex;
  margin: 20px;
`

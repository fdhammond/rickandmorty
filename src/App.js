import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { FaHouseDamage } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";
import { AiTwotoneBug } from "react-icons/ai";
import "./index.css";
import Home from "./components/Home";
import Characters from "./components/Characters";


function App() {
const CHARACTERS_API = `https://rickandmortyapi.com/api/character`
const [characters, setCharacters] = useState([]);

useEffect(() => {
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
          <div className="search-movie">
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
          {characters.length > 0 &&
        characters.map((character) => <Characters key={character.id} {...character} />)}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

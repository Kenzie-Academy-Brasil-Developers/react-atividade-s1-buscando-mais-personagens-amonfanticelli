import "./App.css";
import { useEffect, useState } from "react";
import List from "./components/CharCard";
import api from "../src/services/api";
import axios from "axios";
import ButtonShowBefore from "./components/ButtonShowBefore";
import ButtonShowMore from "./components/ButtonShowMore";
import { Container } from "./style";

function App() {
  const [characters, setCharacters] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [beforePage, setBeforePage] = useState("");
  useEffect(() => {
    api.get().then((response) => {
      console.log(response);
      setCharacters(response.data.results);
      setNextPage(response.data.info.next);
      setBeforePage(response.data.info.prev);
    });

    // fetch(currentPage)
    //   .then((response) => response.json())
    //   .then((response) => setCharacters(response.results))
    //   .catch((err) => console.log(err));
  }, []);

  const showNext = () => {
    axios(nextPage).then((response) => {
      console.log(response.data);
      setCharacters(response.data.results);
      setNextPage(response.data.info.next);
      setBeforePage(response.data.info.prev);
    });
  };

  const showBefore = () => {
    axios(beforePage).then((response) => {
      console.log(response.data);
      setCharacters(response.data.results);
      setNextPage(response.data.info.next);
      setBeforePage(response.data.info.prev);
    });
  };

  return (
    <div className="App">
      <h1 className="pageTitle">Meus Personagens</h1>
      {characters && <List characters={characters} />}
      <Container>
        <ButtonShowBefore showBefore={showBefore} beforePage={beforePage} />
        <ButtonShowMore showNext={showNext} nextPage={nextPage} />
      </Container>
    </div>
  );
}

export default App;

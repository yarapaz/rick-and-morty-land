import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import callToApi from '../services/api';
import Header from './Header';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import Filters from './Filters';

function App() {
  //States
  const [charactersData, setCharactersData] = useState([]);
  const [nameFilter, setNameFilter] = useState('');
  console.log(charactersData);

  //Effects
  useEffect(() => {
    callToApi().then((characters) => setCharactersData(characters));
  }, []);

  //Handlers
  const handleFilterName = (name) => {
    setNameFilter(name);
  };

  const handleFoundCharacter = (id) => {
    return charactersData.find(
      (eachCharacter) => eachCharacter.id === parseInt(id)
    );
  };

  return (
    <>
      <Header />
      <main className='main'>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Filters
                  handleFilterName={handleFilterName}
                  nameFilter={nameFilter}
                />
                <CharacterList
                  charactersData={charactersData}
                  nameFilter={nameFilter}
                />
              </>
            }
          ></Route>
          <Route
            path='/characters/:characterId'
            element={
              <CharacterDetail handleFoundCharacter={handleFoundCharacter} />
            }
          ></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;

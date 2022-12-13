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
  const [speciesFilter, setSpeciesFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');

  //Effects
  useEffect(() => {
    callToApi().then((characters) => setCharactersData(characters));
  }, []);

  //Handlers
  const handleFilterName = (name) => {
    setNameFilter(name);
  };

  const handleFilterSpecies = (species) => {
    setSpeciesFilter(species);
  };

  const handleFilterStatus = (status) => {
    setStatusFilter(status);
  };

  const handleFoundCharacter = (id) => {
    return charactersData.find(
      (eachCharacter) => eachCharacter.id === parseInt(id)
    );
  };

  const getFilteredCharacters = () => {
    return charactersData
      .filter((eachCharacter) => {
        return eachCharacter.name
          .toLowerCase()
          .includes(nameFilter.toLowerCase());
      })
      .filter((eachCharacter) => {
        return eachCharacter.species.toLowerCase().includes(speciesFilter);
      })
      .filter((eachCharacter) => {
        if (statusFilter === 'all') {
          return true;
        } else {
          return eachCharacter.status
            .toLowerCase()
            .includes(statusFilter.toLowerCase());
        }
      });
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
                  handleFilterSpecies={handleFilterSpecies}
                  speciesFilter={speciesFilter}
                  charactersData={charactersData}
                  handleFilterStatus={handleFilterStatus}
                  statusFilter={statusFilter}
                />
                <CharacterList getFilteredCharacters={getFilteredCharacters} />
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

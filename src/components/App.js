import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import callToApi from '../services/api';
import ls from '../services/localStorage';
import Header from './Header';
import CharacterDetail from './CharacterDetail';
import CharacterList from './CharacterList';
import Filters from './Filters';
import Loader from './Loader';

function App() {
  //Local Storage
  const lsInfo = ls.get('savedFilters', {
    name: '',
    species: '',
    status: '',
    origin: [],
  });

  //States
  const [charactersData, setCharactersData] = useState([]);
  const [nameFilter, setNameFilter] = useState(lsInfo.name);
  const [speciesFilter, setSpeciesFilter] = useState(lsInfo.species);
  const [statusFilter, setStatusFilter] = useState(lsInfo.status);
  const [originFilter, setOriginFilter] = useState(lsInfo.origin);
  const [inOriginFilter, setInOriginFilter] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [savedData, setSavedData] = useState({
    name: '',
    species: '',
    status: '',
    origin: [],
  });

  //Effects
  useEffect(() => {
    setIsLoading(true);
    callToApi().then((characters) => {
      setCharactersData(characters);
      setIsLoading(false);
    });
  }, []);

  //Handlers
  const handleFilterName = (name, input) => {
    setNameFilter(name);
    setSavedData({ ...savedData, [input]: name });
    ls.set('savedFilters', { ...savedData, [input]: name });
  };

  const handleFilterSpecies = (species, input) => {
    setSpeciesFilter(species);
    setSavedData({ ...savedData, [input]: species });
    ls.set('savedFilters', { ...savedData, [input]: species });
  };

  const handleFilterStatus = (status, input) => {
    setStatusFilter(status);
    setSavedData({ ...savedData, [input]: status });
    ls.set('savedFilters', { ...savedData, [input]: status });
  };

  const handleFilterOrigin = (origin) => {
    if (!originFilter.includes(origin)) {
      originFilter.push(origin);
      setOriginFilter([...originFilter]);

      savedData.origin.push(origin);
      setSavedData({ ...savedData });
      ls.set('savedFilters', { ...savedData });
    } else {
      const originIndex = originFilter.indexOf(origin);
      originFilter.splice(originIndex, 1);
      setOriginFilter([...originFilter]);

      const storedOriginIndex = savedData.origin.indexOf(origin);
      savedData.origin.splice(storedOriginIndex, 1);
      setSavedData({ ...savedData });
      ls.set('savedFilters', { ...savedData });
    }
  };

  const handleFilterInOrigin = (checked) => {
    setInOriginFilter(checked);
  };

  const handleFoundCharacter = (id) => {
    return charactersData.find(
      (eachCharacter) => eachCharacter.id === parseInt(id)
    );
  };

  const handleReset = () => {
    ls.clear();
    setNameFilter('');
    setSpeciesFilter('');
    setStatusFilter('all');
    setOriginFilter([]);
  };

  //Filters
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
          return eachCharacter.status.includes(statusFilter);
        }
      })
      .filter((eachCharacter) => {
        if (originFilter.length === 0) {
          return true;
        } else {
          return originFilter.includes(eachCharacter.origin);
        }
      })
      .filter((eachCharacter) => {
        if (inOriginFilter) {
          return eachCharacter.origin === eachCharacter.location;
        } else {
          return true;
        }
      });
  };

  return (
    <>
      <Header />
      <main className='main'>
        <Loader isLoading={isLoading} />
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
                  handleFilterOrigin={handleFilterOrigin}
                  originFilter={originFilter}
                  handleReset={handleReset}
                  handleFilterInOrigin={handleFilterInOrigin}
                  inOriginFilter={inOriginFilter}
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

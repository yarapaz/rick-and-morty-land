import '../styles/App.scss';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import callToApi from '../services/api';
import Header from './Header';
import Main from './Main';
import CharacterDetail from './CharacterDetail';

function App() {
  //States
  const [charactersData, setCharactersData] = useState([]);

  //Effects
  useEffect(() => {
    callToApi().then((characters) => setCharactersData(characters));
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main charactersData={charactersData} />}
        ></Route>
        <Route
          path='/characters/:characterId'
          element={<CharacterDetail />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

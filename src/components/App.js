import '../styles/App.scss';
import { useEffect, useState } from 'react';
import callToApi from '../services/api';

function App() {
  //States
  const [charactersData, setCharactersData] = useState([]);

  //Effects
  useEffect(() => {
    callToApi().then((characters) => setCharactersData(characters));
  }, []);

  return (
    <div className='App'>
      <h1>Hola mundo</h1>
    </div>
  );
}

export default App;

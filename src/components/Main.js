import CharacterList from './CharacterList';
import Filters from './Filters';
import '../styles/core/page.scss';

function Main({ charactersData }) {
  return (
    <main className='main'>
      <Filters />
      <CharacterList charactersData={charactersData} />
    </main>
  );
}

export default Main;

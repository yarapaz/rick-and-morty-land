import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';

function CharactersList({ charactersData }) {
  const renderCharacterCards = () => {
    return charactersData
      .sort((firstName, secondName) =>
        firstName.name.localeCompare(secondName.name)
      )
      .map((eachCharacter) => {
        return (
          <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
        );
      });
  };

  return (
    <section className='characters'>
      <ul className='characters__list'>{renderCharacterCards()}</ul>
    </section>
  );
}

export default CharactersList;

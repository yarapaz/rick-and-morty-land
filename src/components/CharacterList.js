import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';
import NotFoundCharacter from './NotFoundCharacter';
import PropTypes from 'prop-types';

function CharacterList({ getFilteredCharacters }) {
  const renderCharacters = () => {
    const filteredCharacters = getFilteredCharacters();

    if (filteredCharacters.length === 0) {
      return <NotFoundCharacter />;
    } else {
      const characters = filteredCharacters
        .sort((firstName, secondName) =>
          firstName.name.localeCompare(secondName.name)
        )
        .map((eachCharacter) => {
          return (
            <CharacterCard
              eachCharacter={eachCharacter}
              key={eachCharacter.id}
            />
          );
        });
      return <ul className='characters__list'>{characters}</ul>;
    }
  };

  return <section className='characters'>{renderCharacters()}</section>;
}

CharacterList.propTypes = {
  getFilteredCharacters: PropTypes.func.isRequired,
};

export default CharacterList;

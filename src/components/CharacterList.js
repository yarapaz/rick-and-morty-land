import PropTypes from 'prop-types';
import '../styles/components/CharacterList.scss';
import CharacterCard from './CharacterCard';
import FilterError from './FilterError';

function CharacterList({ getFilteredCharacters }) {
  const renderCharacters = () => {
    const filteredCharacters = getFilteredCharacters();

    if (filteredCharacters.length === 0) {
      return <FilterError />;
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
      return (
        <nav>
          <ul className='characters__list'>{characters}</ul>
        </nav>
      );
    }
  };

  return <section className='characters'>{renderCharacters()}</section>;
}

CharacterList.propTypes = {
  getFilteredCharacters: PropTypes.func.isRequired,
};

export default CharacterList;

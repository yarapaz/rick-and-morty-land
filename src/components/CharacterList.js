import CharacterCard from './CharacterCard';
import '../styles/components/CharacterList.scss';
import FilterError from './FilterError';
import PropTypes from 'prop-types';

function CharacterList({ charactersData, nameFilter }) {
  const renderCharacterCards = () => {
    const filteredCharacters = charactersData.filter((eachCharacter) => {
      return eachCharacter.name
        .toLowerCase()
        .includes(nameFilter.toLowerCase());
    });

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
      return <ul className='characters__list'>{characters}</ul>;
    }
  };

  return <section className='characters'>{renderCharacterCards()}</section>;
}

CharacterList.propTypes = {
  charactersData: PropTypes.array.isRequired,
  nameFilter: PropTypes.string,
};

export default CharacterList;

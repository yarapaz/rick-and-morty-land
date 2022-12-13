import '../styles/components/FilterBySpecies.scss';
import PropTypes from 'prop-types';

function FilterByOrigin(props) {
  const renderOriginCheckbox = () => {
    const characterOrigins = props.charactersData.map((eachCharacter) => {
      return eachCharacter.origin;
    });

    const newSet = new Set(characterOrigins);
    const uniqueOrigins = [...newSet];

    return uniqueOrigins.map((eachOrigin) => {
      return (
        <>
          <label htmlFor={eachOrigin}>{eachOrigin}</label>
          <input type='checkbox' name={eachOrigin} id={eachOrigin}></input>
        </>
      );
    });
  };

  return (
    <fieldset className='origin'>
      <legend hidden></legend>
      {renderOriginCheckbox()}
    </fieldset>
  );
}

FilterByOrigin.propTypes = {
  charactersData: PropTypes.array.isRequired,
};

export default FilterByOrigin;

//Desarrollar el html del filtro
//* Recoger de la api los origenes unicos de cada personaje
//* Será un filtro de tipo checkbox multiple

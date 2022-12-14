import '../styles/components/FilterByOrigin.scss';
import PropTypes from 'prop-types';

function FilterByOrigin(props) {
  const handleOrigin = (ev) => {
    props.handleFilterOrigin(ev.target.value);
  };

  const renderOriginCheckbox = () => {
    const characterOrigins = props.charactersData.map((eachCharacter) => {
      return eachCharacter.origin;
    });

    const newSet = new Set(characterOrigins);
    const uniqueOrigins = [...newSet];

    return uniqueOrigins.map((eachOrigin, index) => {
      return (
        <div className='origin__box' key={index}>
          <input
            className='origin__checkbox'
            type='checkbox'
            name='origin'
            id={eachOrigin}
            value={eachOrigin}
            onChange={handleOrigin}
            checked={props.originFilter.includes(eachOrigin)}
          ></input>
          <label className='origin__label' htmlFor={eachOrigin}>
            {eachOrigin}
          </label>
        </div>
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
  handleFilterOrigin: PropTypes.func.isRequired,
  originFilter: PropTypes.array,
  charactersData: PropTypes.array.isRequired,
};

export default FilterByOrigin;

//Desarrollar el html del filtro
//* Recoger de la api los origenes unicos de cada personaje
//* Será un filtro de tipo checkbox multiple

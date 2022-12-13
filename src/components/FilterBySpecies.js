import '../styles/components/FilterBySpecies.scss';
import PropTypes from 'prop-types';

function FilterBySpecies(props) {
  const handleSpecies = (ev) => {
    props.handleFilterSpecies(ev.target.name);
  };

  return (
    <fieldset className='species'>
      <legend hidden></legend>
      <input
        className='species__checkbox'
        type='radio'
        name='human'
        id='human'
        onChange={handleSpecies}
        checked={props.speciesFilter === 'human'}
      />
      <label className='species__label' htmlFor='human'>
        Human
      </label>
      <input
        className='species__checkbox'
        type='radio'
        name='alien'
        id='alien'
        onChange={handleSpecies}
        checked={props.speciesFilter === 'alien'}
      />
      <label className='species__label' htmlFor='alien'>
        Alien
      </label>
    </fieldset>
  );
}

FilterBySpecies.propTypes = {
  handleFilterSpecies: PropTypes.func.isRequired,
  speciesFilter: PropTypes.string,
};

export default FilterBySpecies;

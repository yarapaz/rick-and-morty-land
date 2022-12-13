import '../styles/components/FilterByName.scss';
import PropTypes from 'prop-types';

function FilterByName(props) {
  const handleName = (ev) => {
    props.handleFilterName(ev.target.value, ev.target.name);
  };

  return (
    <fieldset className='name'>
      <legend hidden></legend>
      <label className='name__label' htmlFor='name'>
        Name
      </label>
      <input
        type='text'
        name='name'
        id='name'
        className='name__input'
        value={props.nameFilter}
        onChange={handleName}
      />
    </fieldset>
  );
}

FilterByName.propTypes = {
  handleFilterName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
};

export default FilterByName;

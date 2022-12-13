import '../styles/components/FilterByName.scss';
import PropTypes from 'prop-types';

function FilterByName(props) {
  const handleName = (ev) => {
    props.handleFilterName(ev.target.value);
  };

  return (
    <>
      <label htmlFor='name' hidden></label>
      <input
        type='text'
        name='name'
        id='name'
        className='name__input'
        value={props.nameFilter}
        onChange={handleName}
      />
    </>
  );
}

FilterByName.propTypes = {
  handleFilterName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
};

export default FilterByName;

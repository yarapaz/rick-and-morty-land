import '../styles/components/FilterBySpecies.scss';
import PropTypes from 'prop-types';

function FilterByStatus(props) {
  const handleStatus = (ev) => {
    props.handleFilterStatus(ev.target.value);
  };

  const renderStatusOptions = () => {
    const characterStatus = props.charactersData.map((eachCharacter) => {
      return eachCharacter.status;
    });

    const uniqueStatus = characterStatus.filter((eachStatus, index) => {
      return characterStatus.indexOf(eachStatus) === index;
    });

    return uniqueStatus.map((eachStatus, index) => {
      return (
        <option key={index} value={eachStatus}>
          {eachStatus}
        </option>
      );
    });
  };

  return (
    <fieldset className='status'>
      <legend hidden></legend>
      <select name='' id='' value={props.statusFilter} onChange={handleStatus}>
        <option value='all'>Select a status</option>
        {renderStatusOptions()}
      </select>
    </fieldset>
  );
}

FilterByStatus.propTypes = {
  handleFilterStatus: PropTypes.func.isRequired,
  charactersData: PropTypes.array.isRequired,
};

export default FilterByStatus;

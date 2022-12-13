import FilterByName from './FilterByName';
import PropTypes from 'prop-types';
import '../styles/core/page.scss';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import FilterByOrigin from './FilterByOrigin';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form action='' onSubmit={handleSubmit} className='form'>
      <FilterByName
        handleFilterName={props.handleFilterName}
        nameFilter={props.nameFilter}
      />
      <FilterBySpecies
        handleFilterSpecies={props.handleFilterSpecies}
        speciesFilter={props.speciesFilter}
      />
      <FilterByStatus
        charactersData={props.charactersData}
        handleFilterStatus={props.handleFilterStatus}
        statusFilter={props.statusFilter}
      />
      <FilterByOrigin charactersData={props.charactersData} />
    </form>
  );
}

Filters.propTypes = {
  handleFilterName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
  handleFilterSpecies: PropTypes.func.isRequired,
  speciesFilter: PropTypes.string,
  charactersData: PropTypes.object.isRequired,
  handleFilterStatus: PropTypes.func.isRequired,
  statusFilter: PropTypes.string,
};

export default Filters;

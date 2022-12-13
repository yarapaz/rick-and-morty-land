import FilterByName from './FilterByName';
import PropTypes from 'prop-types';
import '../styles/core/page.scss';
import FilterBySpecies from './FilterBySpecies';
import FilterByStatus from './FilterByStatus';
import FilterByOrigin from './FilterByOrigin';
import Reset from './Reset';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleReset = () => {
    props.handleReset();
  };

  return (
    <form action='' onSubmit={handleSubmit} className='form'>
      <div className='form__box'>
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
        <FilterByOrigin
          charactersData={props.charactersData}
          handleFilterOrigin={props.handleFilterOrigin}
          originFilter={props.originFilter}
        />
      </div>
      <Reset handleReset={handleReset} />
    </form>
  );
}

Filters.propTypes = {
  handleFilterName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
  handleFilterSpecies: PropTypes.func.isRequired,
  speciesFilter: PropTypes.string,
  charactersData: PropTypes.array.isRequired,
  handleFilterStatus: PropTypes.func.isRequired,
  statusFilter: PropTypes.string,
  originFilter: PropTypes.array,
  handleReset: PropTypes.func,
};

export default Filters;

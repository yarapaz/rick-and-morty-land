import FilterByName from './FilterByName';
import PropTypes from 'prop-types';
import '../styles/core/page.scss';

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
    </form>
  );
}

Filters.propTypes = {
  handleFilterName: PropTypes.func.isRequired,
  nameFilter: PropTypes.string,
};

export default Filters;

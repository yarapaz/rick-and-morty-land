import FilterByName from './FilterByName';
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

export default Filters;

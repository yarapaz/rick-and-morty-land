import FilterByName from './FilterByName';
import '../styles/core/page.scss';

function Filters() {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <form action='' onSubmit={handleSubmit} className='form'>
      <FilterByName />
    </form>
  );
}

export default Filters;

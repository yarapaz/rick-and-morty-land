import '../styles/components/FilterByName.scss';

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

export default FilterByName;

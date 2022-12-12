import '../styles/components/FilterByName.scss';

function FilterByName({}) {
  const handleName = (ev) => {};

  return (
    <>
      <label htmlFor='name' hidden></label>
      <input
        type='text'
        name='name'
        id='name'
        className='name__input'
        onChange={handleName}
      />
    </>
  );
}

export default FilterByName;

import '../styles/components/FilterByName.scss';

function FilterByName() {
  return (
    <>
      <label htmlFor='name' hidden></label>
      <input type='text' name='name' id='name' className='name__input' />
    </>
  );
}

export default FilterByName;

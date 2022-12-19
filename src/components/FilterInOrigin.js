import '../styles/components/FilterInOrigin.scss';

function FilterInOrigin(props) {
  const handleLocation = (ev) => {
    props.handleFilterInOrigin(ev.target.checked);
  };

  return (
    <fieldset className='inOrigin'>
      <div className='inOrigin__box'>
        <input
          className='inOrigin__checkbox'
          type='checkbox'
          name='location'
          id='location'
          value='location'
          onChange={handleLocation}
          checked={props.inOriginFilter}
        ></input>
        <label className='inOrigin__label' htmlFor='location'>
          Location same as origin
        </label>
      </div>
    </fieldset>
  );
}

export default FilterInOrigin;

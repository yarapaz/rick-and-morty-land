function FilterInOrigin(props) {
  const handleLocation = (ev) => {
    props.handleFilterInOrigin(ev.target.checked);
  };
  return (
    <div className='origin__box'>
      <input
        className='origin__checkbox'
        type='checkbox'
        name='location'
        id='location'
        value='location'
        onChange={handleLocation}
        checked={props.inOriginFilter}
      ></input>
      <label className='origin__label' htmlFor='location'>
        Location same as origin
      </label>
    </div>
  );
}

export default FilterInOrigin;

//Al hacer click sobre el checkbox me tiene que comparar location con origin de ese personaje en cuestion

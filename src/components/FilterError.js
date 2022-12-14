import '../styles/components/FilterError.scss';

function FilterError() {
  return (
    <article className='error'>
      <p className='error__message'>
        Oops! The character you are looking for doesn't exist. Try again!
      </p>
    </article>
  );
}

export default FilterError;

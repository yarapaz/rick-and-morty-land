import '../styles/components/ResetBtn.scss';

function Reset({ handleReset }) {
  return (
    <button className='reset' type='reset' onClick={handleReset}>
      Reset Filters
    </button>
  );
}

export default Reset;

import PropTypes from 'prop-types';
import '../styles/components/ResetBtn.scss';

function Reset({ handleReset }) {
  return (
    <button className='reset' type='reset' onClick={handleReset}>
      Reset Filters
    </button>
  );
}

Reset.propTypes = {
  handleReset: PropTypes.func,
};

export default Reset;

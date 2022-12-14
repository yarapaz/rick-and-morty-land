import '../styles/components/Loader.scss';

function Loader({ isLoading }) {
  return isLoading ? <span className='loader' /> : '';
}

export default Loader;

import { NavLink } from 'react-router-dom';
import '../styles/components/PageNotFound.scss';

function PageNotFound() {
  return (
    <article className='pageNotFound'>
      <NavLink to='/' className='pageNotFound__link'>
        Go back to Main Page
      </NavLink>
    </article>
  );
}

export default PageNotFound;

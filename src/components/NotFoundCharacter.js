import { NavLink } from 'react-router-dom';
import '../styles/components/NotFoundCharacter.scss';

function NotFoundCharacter() {
  return (
    <article className='error'>
      <p className='error__message'>
        Oops! The character you are looking for doesn't exist. Try again!
      </p>
      <NavLink to='/' className='error__link'>
        Go back to character list
      </NavLink>
    </article>
  );
}

export default NotFoundCharacter;

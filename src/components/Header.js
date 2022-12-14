import { NavLink } from 'react-router-dom';
import '../styles/components/Header.scss';
import logo from '../images/Rick-And-Morty-Logo.png';

function Header() {
  return (
    <header className='header'>
      <h1 hidden></h1>
      <NavLink to='/'>
        <div
          className='header__logo'
          style={{
            backgroundImage: `url(${logo})`,
          }}
        ></div>
      </NavLink>
    </header>
  );
}

export default Header;

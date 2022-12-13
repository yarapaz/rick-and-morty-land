import { NavLink } from 'react-router-dom';
import '../styles/components/ErrorMessage.scss';

function FilterError() {
  return (
    <section className='error'>
      <p className='error__message'>
        Creo que el personaje que buscas no existe
      </p>
      <NavLink to='/' className='error__link'>
        Volver a lista de personajes
      </NavLink>
    </section>
  );
}

export default FilterError;

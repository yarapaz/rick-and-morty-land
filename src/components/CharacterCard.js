import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/CharacterCard.scss';

function CharacterCard({ eachCharacter }) {
  return (
    <li key={eachCharacter.id}>
      <NavLink
        className='character__link'
        to={`/characters/${eachCharacter.id}`}
      >
        <article className='character__card'>
          <div
            className='character__img'
            style={{ backgroundImage: `url(${eachCharacter.img})` }}
          ></div>
          <h2 className='character__name'>{eachCharacter.name}</h2>
          <h3 className='character__species'>{eachCharacter.species}</h3>
        </article>
      </NavLink>
    </li>
  );
}

CharacterCard.propTypes = {
  eachCharacter: PropTypes.object,
};

export default CharacterCard;

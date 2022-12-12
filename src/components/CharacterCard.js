import '../styles/components/CharacterCard.scss';
import { Link } from 'react-router-dom';

function CharacterCard({ eachCharacter }) {
  return (
    <li key={eachCharacter.id}>
      <Link className='character__link' to={`/characters/${eachCharacter.id}`}>
        <article className='character__card'>
          <div
            className='character__img'
            style={{ backgroundImage: `url(${eachCharacter.img})` }}
          ></div>
          <h2 className='character__name'>{eachCharacter.name}</h2>
          <h3 className='character__species'>{eachCharacter.species}</h3>
        </article>
      </Link>
    </li>
  );
}

export default CharacterCard;

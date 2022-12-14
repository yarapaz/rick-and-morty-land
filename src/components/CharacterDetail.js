import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/components/CharacterDetail.scss';
import NotFoundCharacter from './NotFoundCharacter';

function CharacterDetail({ handleFoundCharacter }) {
  const params = useParams();
  const foundCharacter = handleFoundCharacter(params.characterId);

  const species = () => {
    if (foundCharacter.species === 'Human') {
      return <i className='fa-solid fa-person'></i>;
    } else if (foundCharacter.species === 'Alien') {
      return <i className='fa-brands fa-reddit-alien'></i>;
    }
  };

  if (foundCharacter !== undefined) {
    return (
      <section className='character_detail__section'>
        <Link className='character_detail__link' to='/'>
          <i className='fa-solid fa-angle-left'></i> Go back
        </Link>
        <article className='character_detail__card'>
          <div
            className='character_detail__img'
            style={{ backgroundImage: `url(${foundCharacter.img})` }}
          ></div>
          <div className='character_detail__box'>
            <h2 className='character_detail__name'>{foundCharacter.name}</h2>
            <div className='character_detail__info'>
              <p className='character_detail__title'>Status:</p>
              <p className='character_detail__description'>
                {foundCharacter.status === 'Dead' ? (
                  <i className='fa-solid fa-skull-crossbones'></i>
                ) : (
                  foundCharacter.status
                )}
              </p>
            </div>
            <div className='character_detail__info'>
              <p className='character_detail__title'>Species:</p>
              <p className='character_detail__description'>{species()}</p>
            </div>
            <div className='character_detail__info'>
              <p className='character_detail__title'>Origin:</p>
              <p className='character_detail__description'>
                {foundCharacter.origin}
              </p>
            </div>
            <div className='character_detail__info'>
              <p className='character_detail__title'>Episodes:</p>
              <p className='character_detail__description'>
                {foundCharacter.episodes}
              </p>
            </div>
          </div>
        </article>
      </section>
    );
  } else {
    return <NotFoundCharacter />;
  }
}

CharacterDetail.propTypes = {
  handleFoundCharacter: PropTypes.func.isRequired,
};

export default CharacterDetail;

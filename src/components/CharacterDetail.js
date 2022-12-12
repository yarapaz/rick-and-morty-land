import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';

function CharacterDetail({ handleFoundCharacter }) {
  const params = useParams();
  const foundCharacter = handleFoundCharacter(params.characterId);

  if (foundCharacter !== undefined) {
    return (
      <section className='character_detail__section'>
        <Link className='character_detail__link' to='/'>
          <i class='fa-solid fa-angle-left'></i> Volver
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
                {foundCharacter.status}
              </p>
            </div>
            <div className='character_detail__info'>
              <p className='character_detail__title'>Species:</p>
              <p className='character_detail__description'>
                {foundCharacter.species}
              </p>
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
  }
}

export default CharacterDetail;

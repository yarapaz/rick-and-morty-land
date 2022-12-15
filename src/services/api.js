const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results.map((eachCharacter) => {
        const character = {
          id: eachCharacter.id,
          img: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
          status: eachCharacter.status,
          origin: eachCharacter.origin.name,
          location: eachCharacter.location.name,
          episodes: eachCharacter.episode.length,
        };
        return character;
      });
      console.log(characters);
      return characters;
    })
    .catch((error) => console.log(`An error ${error} has occurred`));
};

export default callToApi;

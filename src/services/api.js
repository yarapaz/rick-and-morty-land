const callToApi = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then((response) => response.json())
    .then((data) => {
      const characters = data.results.map((eachCharacter) => {
        const character = {
          img: eachCharacter.image,
          name: eachCharacter.name,
          species: eachCharacter.species,
        };
        return character;
      });
      return characters;
    });
};

export default callToApi;

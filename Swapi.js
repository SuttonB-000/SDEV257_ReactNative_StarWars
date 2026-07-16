const baseUrl = "https://www.swapi.tech/api/";

//return Planets
export const getPlanets = () => {
  return fetch(`${baseUrl}planets/`).then((response) => response.json());
};

//return Films
export const getFilms = () => {
  return fetch(`${baseUrl}films/`).then((response) => response.json());
};

//return Spaceships
export const getSpaceships = () => {
  return fetch(`${baseUrl}starships/`).then((response) =>
    response.json(),
  );
};

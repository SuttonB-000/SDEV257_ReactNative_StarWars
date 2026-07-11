const baseUrl = "https://swapi.tech/api/";

//return Planets
export const getPlanets = (id) => {
  return fetch(`${baseUrl}planets/${id}/`).then((response) => response.json());
};

//return films
export const getFilms = (id) => {
  return fetch(`${baseUrl}films/${id}/`).then((response) => response.json());
};

//return Spaceships
export const getSpaceships = (id) => {
  return fetch(`${baseUrl}starships/${id}/`).then((response) =>
    response.json(),
  );
};

const baseUrl = "https://www.swapi.tech/api/";

//return Planets
export const getPlanets = (id) => {
  return fetch(`${baseUrl}planets/${id}/`).then((response) => response.json());
};

//return Films
export const getFilms = (id) => {
  return fetch(`${baseUrl}films/${id}/`).then((response) => response.json());
};

//return Spaceships
export const getSpaceships = (id) => {
  return fetch(`${baseUrl}starships/${id}/`).then((response) =>
    response.json(),
  );
};

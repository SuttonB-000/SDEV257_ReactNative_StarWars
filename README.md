# SWAPI 

fetch("https://www.swapi.tech/api/planets/1/")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err))

# the swapi base url is:
    - https://www.swapi.tech/api/
    or
    - https://swapi.tech/api


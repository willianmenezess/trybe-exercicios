const fetchApiDog = () => fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((dados) => dados);

const fetchApiCat = () => fetch('https://aws.random.cat/meow')
  .then((response) => response.json())
  .then((dados) => dados);

const fetchSurprise = () => Promise.any([
  fetch('https://dog.ceo/api/breeds/image/random'),
  fetch('https://aws.random.cat/meow')])
  .then((response) => response.json())
  .then((dados) => dados);

export { fetchApiDog, fetchApiCat, fetchSurprise };

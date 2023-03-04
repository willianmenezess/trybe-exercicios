const fetchDados = (idSearch, token) => fetch(`https://www.superheroapi.com/api.php/${token}/${idSearch}`)
  .then((response) => response.json())
  .then((dados) => {
    if (dados.name === undefined) {
      throw new Error('ID do sorteado não existe, tente novamente');
    }
    return dados;
  });

export { fetchDados };

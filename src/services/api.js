// Importamos o Axiosda biblioteca axios.
import axios from "axios";

// Criamos a variável chamada api e atribuímos a ela axios.create,
// que será o início e a estrutura base do serviço de API que consumiremos.
const api = axios.create({
  // Dentro da criação do Axios, temos uma propriedade chamada.
  // Ela recebe o endpoint de sua aplicação, ou seja, a URL da API que será acessada.
  // Neste exemplo está o serviço do GitHub
  baseURL: "https://akabab.github.io/superhero-api/api/",
});

export default api;
//Nesta parte do código exportaremos nossa variável para ser importada em qualquer parte do nosso projeto.
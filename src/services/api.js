import axios from 'axios';

// Criando uma instância do axios com a URL base da API fornecida no enunciado
const api = axios.create({
  baseURL: 'http://localhost:5000'
});

export default api;
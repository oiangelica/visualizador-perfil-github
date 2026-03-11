// Módulo responsável pelas chamadas à API do GitHub

const BASE_URL = 'https://api.github.com';

export const API = {
  async fetchUser(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}`);
    
    if (!response.ok) {
      throw new Error('Usuário não encontrado');
    }
    
    return await response.json();
  },

  async fetchRepos(userName) {
    const response = await fetch(`${BASE_URL}/users/${userName}/repos?sort=created&direction=desc&per_page=10`);
    
    if (!response.ok) {
      throw new Error('Erro ao buscar repositórios');
    }
    
    return await response.json();
  },
};


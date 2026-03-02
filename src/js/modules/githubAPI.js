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
};

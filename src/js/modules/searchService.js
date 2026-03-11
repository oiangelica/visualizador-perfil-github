// Módulo responsável pela lógica de busca de usuários

import { API } from './githubAPI.js';
import { UI } from './uiController.js';
import { Utils } from './stringValidators.js';

export const SearchService = {
  async search(userName) {
    const cleanedUserName = Utils.sanitizeUsername(userName);

    if (!Utils.isValidUsername(cleanedUserName)) {
      UI.showError('Por favor, digite o nome de usuário do GitHub.');
      return;
    }

    try {
      UI.showLoading();
      UI.clearResults();

      const [userData, repos] = await Promise.all([
        API.fetchUser(cleanedUserName),
        API.fetchRepos(cleanedUserName)
      ]);

      UI.renderProfile(userData);
      UI.renderRepos(repos);
    } catch (error) {
      UI.showError('Usuário não encontrado. Por favor verifique o nome de usuário e tente novamente.');
      console.error('Erro ao buscar usuário:', error);
    } finally {
      UI.hideLoading();
    }
  },
};

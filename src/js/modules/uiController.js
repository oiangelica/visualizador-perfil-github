// Módulo responsável pela manipulação da interface do usuário

import { DOM } from './domElements.js';

export const UI = {
  showLoading() {
    DOM.loadingElement.classList.add('show');
  },

  hideLoading() {
    DOM.loadingElement.classList.remove('show');
  },

  clearResults() {
    DOM.profileResults.innerHTML = '';
  },

  renderProfile(userData) {
    const bio = userData.bio || 'Não possui bio cadastrada 😢';
    
    DOM.profileResults.innerHTML = `
      <div class="profile-card">
        <img src="${userData.avatar_url}" alt="Foto de perfil do usuário ${userData.name}" class="profile-avatar">
        <div class="profile-infos">
          <h2>${userData.name}</h2>
          <p>${bio}</p>
        </div>
      </div>
        <div class="profile-counters">
          <div class="followers">
            <h4>👻 Seguidores</h4>
            <span>${userData.followers}</span>
          </div>
          <div class="following">
            <h4>👻 Seguindo</h4>
            <span>${userData.following}</span>
          </div>
        </div>
      <div class="repositories">
        <h3>Repositórios</h3>
        <ul class="repo-list"></ul>
      </div>
    `;
  },

  renderRepos(repos) {
    const repoList = document.querySelector('.repo-list');
    
    if (repos.length === 0) {
      repoList.innerHTML = '<li>Este usuário não possui repositórios públicos.</li>';
      return;
    }

    const reposHTML = repos.map(repo => {
      const language = repo.language || '__';
      return `
        <li>
          <a href="${repo.html_url}" target="_blank" class="repo-name">
            ${repo.name}
          </a>
          <div class="repo-stats">
          <span class="repo-stat" title="Estrelas">⭐Stars: ${repo.stargazers_count}</span>
          <span class="repo-stat" title="Forks">🍴Forks: ${repo.forks_count}</span>
          <span class="repo-stat" title="Watchers">👀Watchers: ${repo.watchers_count}</span>
          <span class="repo-stat" title="Linguagem">👩‍💻</i>Linguagem: ${language}</span>
          </div>
        </li>
      `;
    }).join(''); // Concatena os itens do array em uma única string (elimina as vírgulas de separação entre um item e outro por padrão)

    repoList.innerHTML = reposHTML;
  },

  showError(message) {
    alert(message);
  },
};

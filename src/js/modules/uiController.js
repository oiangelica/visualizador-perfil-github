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
      
    `;
  },

  showError(message) {
    alert(message);
  },
};

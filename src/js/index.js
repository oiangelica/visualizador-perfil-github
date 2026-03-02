// Ponto de entrada da aplicação - orquestra os módulos

import { DOM } from './modules/domElements.js';
import { SearchService } from './modules/searchService.js';

// Event listener para o botão de busca
DOM.btnSearch.addEventListener('click', () => {
  SearchService.search(DOM.inputSearch.value);
});

// Event listener para buscar ao pressionar Enter
DOM.inputSearch.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    SearchService.search(DOM.inputSearch.value);
  }
});
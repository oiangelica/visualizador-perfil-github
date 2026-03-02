// Módulo com funções utilitárias

export const Utils = {
  sanitizeUsername(userName) {
    return userName.replace(/\s/g, '');
  },

  isValidUsername(userName) {
    return userName && userName.length > 0;
  },
};

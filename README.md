# 🔍 Visualizador de Perfil do GitHub

![GitHub top language](https://img.shields.io/github/languages/top/oiangelica/visualizador-perfil-github?style=for-the-badge)
![GitHub repo size](https://img.shields.io/github/repo-size/oiangelica/visualizador-perfil-github?style=for-the-badge)
![GitHub last commit](https://img.shields.io/github/last-commit/oiangelica/visualizador-perfil-github?style=for-the-badge)

Uma aplicação web simples e elegante que utiliza a API do GitHub para buscar e exibir informações detalhadas de perfis de usuários, incluindo estatísticas e repositórios.

---

## 🚀 Demonstração

Você pode acessar o projeto online aqui: **https://oiangelica.github.io/visualizador-perfil-github/**


---

## ✨ Funcionalidades

- 🔍 **Busca Dinâmica:** Pesquise qualquer usuário do GitHub pelo username.
- 👤 **Informações de Perfil:** Exibe avatar, nome, bio, seguidores e quem o usuário está seguindo.
- 📂 **Listagem de Repositórios:** Mostra os repositórios públicos com estatísticas de:
  - ⭐ Estrelas
  - 🍴 Forks
  - 👀 Watchers
  - 👩‍💻 Linguagem predominante
- 📱 **Design Responsivo:** Adaptado para dispositivos móveis, tablets e desktops.
- ⚡ **Interface Fluida:** Inclui estados de carregamento (loading) e animações suaves.
- 🛠️ **Arquitetura Modular:** Código organizado em módulos JavaScript (ES6) para melhor manutenção.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização moderna, animações customizadas e layouts responsivos.
- **JavaScript (ES6+):** Lógica da aplicação, manipulação do DOM e consumo de API.
- **GitHub API:** Fonte de dados para perfis e repositórios.
- **Devicons:** Ícones de tecnologias e redes sociais.

---

## 📂 Estrutura do Projeto

```text
├── index.html           # Página principal
├── src/
│   ├── css/             # Estilos modularizados (reset, styles, animations, responsive)
│   └── js/
│       ├── index.js     # Ponto de entrada (Main)
│       └── modules/     # Lógica separada por responsabilidades
│           ├── api.js           # Comunicação com GitHub API
│           ├── domElements.js   # Seleção de elementos do HTML
│           ├── searchService.js # Lógica de orquestração da busca
│           ├── uiController.js  # Manipulação da interface (Renderização)
│           └── utils.js         # Validadores e utilitários
```

---

## 🔧 Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/visualizador-perfil-github.git
   ```
2. Navegue até a pasta do projeto:
   ```bash
   cd visualizador-perfil-github
   ```
3. Abra o arquivo `index.html` no seu navegador ou utilize a extensão **Live Server** no VS Code.

---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

Feito com ❤️ por [Angélica Coelho](https://github.com/oiangelica)

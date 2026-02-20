const inputSearch = document.getElementById('input-search');
const btnSearch = document.getElementById('btn-search');
const baseURL = 'https://api.github.com';
const profileResults = document.querySelector('.profile-results');
const loadingElement = document.getElementById('loading');

btnSearch.addEventListener('click', async () => {
    const userName = inputSearch.value.replace(/\s/g, ''); // Remove espaços em branco do nome de usuário.

    if (userName) { //verifica se o nome de usuário não está vazio. (Se username OK, faz a requisição).
        try {
            // Mostrar carregamento
            loadingElement.classList.add('show');
            profileResults.innerHTML = '';

            const response = await fetch(`${baseURL}/users/${userName}`); //Espere a resoposta da API para dar seguimento ao código.

            if (!response.ok) {
                // Ocultar carregamento em caso de erro
                loadingElement.classList.remove('show');
                alert('Usuário não encontrado. Por favor verifique o nome de usuário e tente novamente.'); //Caso a requisição falhe, alerta ao usuário que o username inserido não foi encontrado. (Tratamento de erro)
                return
            }

            const userData = await response.json(); //Espere a resposta ser convertida para JSON antes de prosseguir.

            // Ocultar carregamento após receber os dados
            loadingElement.classList.remove('show');

            profileResults.innerHTML = `
                <div class="profile-card"> 
                    <img src="${userData.avatar_url}" alt="Foto de perfil do usuário ${userData.name}" class="profile-avatar">
                    <div class="profile-infos"> 
                        <h2>${userData.name}</h2>
                        <p>${userData.bio || "Não possui bio cadastrada 😢"}</p>
                    </div>
                </div>`;
                
        } catch (error) {
            // Ocultar carregamento em caso de erro
            loadingElement.classList.remove('show');
            console.error('Erro ao buscar usuário:', error);
        }


    } else {
        alert('Por favor, digite o nome de usuário do gitHub.');
    }
});
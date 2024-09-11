// script.js

document.addEventListener('DOMContentLoaded', () => {
    const demoBtn = document.getElementById('demo-btn');
    const downloadsCountElem = document.getElementById('downloads-count');

    // Recupera o número de downloads do localStorage ou inicializa como 0
    let downloadsCount = parseInt(localStorage.getItem('downloadsCount')) || 0;
    downloadsCountElem.textContent = downloadsCount;

    demoBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // Atualiza o contador de downloads
        downloadsCount += 1;
        localStorage.setItem('downloadsCount', downloadsCount);
        downloadsCountElem.textContent = downloadsCount;

        // Inicia o download e redireciona para o arquivo
        const downloadUrl = ''; // Substitua pela URL do arquivo que você deseja que seja baixado
        window.location.href = downloadUrl;
    });
});

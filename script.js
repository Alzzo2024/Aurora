document.addEventListener('DOMContentLoaded', () => {
    const downloadsCountElement = document.getElementById('downloads-count');
    const downloadBtn = document.getElementById('downloadBtn');

    // Recupera o número de downloads armazenado no localStorage
    let downloads = localStorage.getItem('downloads');
    if (downloads === null) {
        downloads = 0; // Valor inicial se não houver downloads registrados
    } else {
        downloads = parseInt(downloads, 10);
    }
    
    // Atualiza o contador na página
    downloadsCountElement.textContent = downloads;

    // Adiciona o evento de clique para o botão de download
    downloadBtn.addEventListener('click', () => {
        downloads += 1;
        localStorage.setItem('downloads', downloads);
        downloadsCountElement.textContent = downloads;
    });
});
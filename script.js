// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Inicializa contagem de downloads
  let downloadsCount = 0;
  const downloadsCounter = document.getElementById('downloads-count');

  // Função para incrementar contagem de downloads
  function incrementDownloads() {
    downloadsCount++;
    downloadsCounter.textContent = downloadsCount;
  }

  // Adiciona evento de clique nos botões de download
  const androidDownloadBtn = document.getElementById('androidDownloadBtn');
  const appleDownloadBtn = document.getElementById('appleDownloadBtn');

  androidDownloadBtn.addEventListener('click', function() {
    incrementDownloads();
    alert('Download do Android iniciado!');
  });

  appleDownloadBtn.addEventListener('click', function() {
    incrementDownloads();
    alert('Download do Apple iniciado!');
  });

  // Alternar tema
  const themeSelector = document.getElementById('themeSelector');
  const body = document.body;

  themeSelector.addEventListener('change', function() {
    if (this.value === 'dark') {
      body.classList.remove('theme-light');
      body.classList.add('theme-dark');
    } else {
      body.classList.remove('theme-dark');
      body.classList.add('theme-light');
    }
  });

  // Exibir alerta se Sybilla estiver fora de serviço
  const sybillaAlert = document.getElementById('sybillaAlert');
  sybillaAlert.style.display = 'block'; // Mostra o alerta
});

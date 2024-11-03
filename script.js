document.addEventListener('DOMContentLoaded', () => {
    const downloadsCountElement = document.getElementById('downloads-count');
    const androidDownloadBtn = document.getElementById('androidDownloadBtn');
    const appleDownloadBtn = document.getElementById('appleDownloadBtn');
    const themeSelector = document.getElementById('themeSelector');
    const sybillaLink = document.getElementById('sybillaLink');
    const sybillaAlert = document.getElementById('sybillaAlert');

    // Função para atualizar o contador de downloads
    function updateDownloadsCount() {
        fetch('https://api.jsonbin.io/v3/b/66e7113dacd3cb34a884f597', {
            method: 'GET',
            headers: {
                'X-Master-Key': '$2a$10$XpTwS9YZFZcL8ObEgU/Z3uPp3CO3Y5QptX2TQyzt2xk.QpF0PMW9i'
            }
        })
        .then(response => response.json())
        .then(data => {
            let downloads = data.record.downloads || 0;
            downloadsCountElement.textContent = downloads;
        })
        .catch(error => console.error('Error fetching download count:', error));
    }

    // Inicializa o contador de downloads
    updateDownloadsCount();

    // Adiciona o evento de clique no botão de download do Android
    androidDownloadBtn.addEventListener('click', (event) => {
        event.preventDefault();
        
        fetch('https://api.jsonbin.io/v3/b/66e7113dacd3cb34a884f597', {
            method: 'GET',
            headers: {
                'X-Master-Key': '$2a$10$XpTwS9YZFZcL8ObEgU/Z3uPp3CO3Y5QptX2TQyzt2xk.QpF0PMW9i'
            }
        })
        .then(response => response.json())
        .then(data => {
            let downloads = data.record.downloads || 0;
            downloads += 1;

            fetch('https://api.jsonbin.io/v3/b/66e7113dacd3cb34a884f597', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': '$2a$10$XpTwS9YZFZcL8ObEgU/Z3uPp3CO3Y5QptX2TQyzt2xk.QpF0PMW9i'
                },
                body: JSON.stringify({ downloads: downloads })
            })
            .then(() => {
                updateDownloadsCount();
                // Redireciona para o link do APK
                window.location.href = 'https://storage.googleapis.com/appilder/app/efb2d658839ae545ba85a93a515f2d89/fe0e6b315d91c71dae0244d3163c96fa.apk?GoogleAccessId=desktopapi%40appilder-com.iam.gserviceaccount.com&Expires=1726620991&Signature=JC4ci4KPfUtLRoBM0csdS0aYjmG8iaDhTwoZ%2FZd%2FyWjDjzsUvqLAChuTcwtYuJaarM6AMQXqKshl7%2FW49EB0BXoMgQL9Ce5oZHuiV1JE4z%2BaY7KCdjxQFqokiPcgGks34SzfIwC9d4BPRKoFzC0phGLKlom289kt0144g5QijFjzlEEi7yAGc5YFYp1kBLJ4ak6BP7I9psE5g87I9jtvEnlzqHp4rDE%2BjqepazJcGKTvFyU8UuFtQ%2BXOxfwnvajmkqe8LksPaZbcxQDDL1olTuZ2F%2BrI1MCIrwQCTNjUIDlGJv6XvdiewnEroQhPF1irrGhZj%2B0bwVSUmmUj3%2BpOsQ%3D%3D';
            })
            .catch(error => console.error('Error updating download count:', error));
        })
        .catch(error => console.error('Error fetching current download count:', error));
    });

    // Adiciona o evento de clique no botão de download da Apple
    appleDownloadBtn.addEventListener('click', (event) => {
        event.preventDefault();
        // Aqui você pode adicionar a lógica de download para a Apple
        alert('Funcionalidade de download para Apple ainda não implementada.');
    });

    // Seletor de tema
    themeSelector.addEventListener('change', (event) => {
        const selectedTheme = event.target.value;
        document.body.className = `theme-${selectedTheme}`;
        localStorage.setItem('theme', selectedTheme);
    });

    // Carrega o tema salvo
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.className = `theme-${savedTheme}`;
        themeSelector.value = savedTheme;
    }

    // Rolagem suave para links âncora
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mostra o alerta da Sybilla IA quando o link é clicado
    sybillaLink.addEventListener('click', (e) => {
        e.preventDefault();
        sybillaAlert.style.display = 'block';
        setTimeout(() => {
            sybillaAlert.style.display = 'none';
        }, 5000);
    });

    // Função para ajustar o padding-top do body baseado na altura do header
    function adjustBodyPadding() {
        const headerHeight = document.querySelector('.header').offsetHeight;
        document.body.style.paddingTop = `${headerHeight}px`;
    }

    // Chama a função de ajuste de padding quando a página carrega e quando redimensiona
    window.addEventListener('load', adjustBodyPadding);
    window.addEventListener('resize', adjustBodyPadding);

    // Adiciona funcionalidade ao botão de idioma (exemplo)
    const languageBtn = document.querySelector('.btn-language');
    languageBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // Aqui você pode adicionar a lógica para mudar o idioma
        alert('Funcionalidade de mudança de idioma ainda não implementada.');
    });
});

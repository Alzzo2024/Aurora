document.addEventListener('DOMContentLoaded', () => {
    const downloadsCountElement = document.getElementById('downloads-count');
    const downloadBtn = document.getElementById('downloadBtn');

    // Recupera o número de downloads armazenado no JSONBin
    fetch('https://api.jsonbin.io/v3/b/66e7113dacd3cb34a884f597', {
        method: 'GET',
        headers: {
            'X-Master-Key': '$2a$10$XpTwS9YZFZcL8ObEgU/Z3uPp3CO3Y5QptX2TQyzt2xk.QpF0PMW9i'
        }
    })
    .then(response => response.json())
    .then(data => {
        let downloads = data.record.downloads || 0; // Inicializa com 0 se não houver dados
        downloadsCountElement.textContent = downloads;
    });

    // Adiciona o evento de clique no botão "Demo"
    downloadBtn.addEventListener('click', (event) => {
        event.preventDefault(); // Previne o comportamento padrão de link
        
        // Incrementa o contador de downloads
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

            // Atualiza o contador no JSONBin
            fetch('https://api.jsonbin.io/v3/b/66e7113dacd3cb34a884f597', {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Master-Key': '$2a$10$XpTwS9YZFZcL8ObEgU/Z3uPp3CO3Y5QptX2TQyzt2xk.QpF0PMW9i'
                },
                body: JSON.stringify({ downloads: downloads })
            })
            .then(() => {
                // Atualiza o contador na página
                downloadsCountElement.textContent = downloads;
                
                // Redireciona para o link de download do APK
                window.location.href = 'https://storage.googleapis.com/appilder/app/efb2d658839ae545ba85a93a515f2d89/fe0e6b315d91c71dae0244d3163c96fa.apk?GoogleAccessId=desktopapi%40appilder-com.iam.gserviceaccount.com&Expires=1726620991&Signature=JC4ci4KPfUtLRoBM0csdS0aYjmG8iaDhTwoZ%2FZd%2FyWjDjzsUvqLAChuTcwtYuJaarM6AMQXqKshl7%2FW49EB0BXoMgQL9Ce5oZHuiV1JE4z%2BaY7KCdjxQFqokiPcgGks34SzfIwC9d4BPRKoFzC0phGLKlom289kt0144g5QijFjzlEEi7yAGc5YFYp1kBLJ4ak6BP7I9psE5g87I9jtvEnlzqHp4rDE%2BjqepazJcGKTvFyU8UuFtQ%2BXOxfwnvajmkqe8LksPaZbcxQDDL1olTuZ2F%2BrI1MCIrwQCTNjUIDlGJv6XvdiewnEroQhPF1irrGhZj%2B0bwVSUmmUj3%2BpOsQ%3D%3D';
            });
        });
    });
});

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
        const downloadUrl = 'https://storage.googleapis.com/appilder/app/efb2d658839ae545ba85a93a515f2d89/fe0e6b315d91c71dae0244d3163c96fa.apk?GoogleAccessId=desktopapi%40appilder-com.iam.gserviceaccount.com&Expires=1726620991&Signature=JC4ci4KPfUtLRoBM0csdS0aYjmG8iaDhTwoZ%2FZd%2FyWjDjzsUvqLAChuTcwtYuJaarM6AMQXqKshl7%2FW49EB0BXoMgQL9Ce5oZHuiV1JE4z%2BaY7KCdjxQFqokiPcgGks34SzfIwC9d4BPRKoFzC0phGLKlom289kt0144g5QijFjzlEEi7yAGc5YFYp1kBLJ4ak6BP7I9psE5g87I9jtvEnlzqHp4rDE%2BjqepazJcGKTvFyU8UuFtQ%2BXOxfwnvajmkqe8LksPaZbcxQDDL1olTuZ2F%2BrI1MCIrwQCTNjUIDlGJv6XvdiewnEroQhPF1irrGhZj%2B0bwVSUmmUj3%2BpOsQ%3D%3D'; // Substitua pela URL do arquivo que você deseja que seja baixado
        window.location.href = downloadUrl;
    });
});

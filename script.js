document.addEventListener('DOMContentLoaded', () => {
    const demoBtn = document.getElementById('demo-btn');
    const downloadsCountElem = document.getElementById('downloads-count');

    // Função para obter a contagem de downloads do servidor
    async function fetchDownloadsCount() {
        try {
            const response = await fetch('/downloads');
            const data = await response.json();
            downloadsCountElem.textContent = data.count;
            return data.count;
        } catch (error) {
            console.error('Erro ao buscar a contagem de downloads:', error);
            return 0; // Valor padrão em caso de erro
        }
    }

    // Função para atualizar a contagem de downloads no servidor
    async function updateDownloadsCount(count) {
        try {
            await fetch('/downloads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ count })
            });
        } catch (error) {
            console.error('Erro ao atualizar a contagem de downloads:', error);
        }
    }

    // Inicializa a contagem de downloads
    fetchDownloadsCount();

    demoBtn.addEventListener('click', async (event) => {
        event.preventDefault();

        // Atualiza o contador de downloads
        let downloadsCount = parseInt(downloadsCountElem.textContent);
        downloadsCount += 1;

        // Atualiza o contador na página
        downloadsCountElem.textContent = downloadsCount;

        // Envia a nova contagem para o servidor
        await updateDownloadsCount(downloadsCount);

        // Inicia o download e redireciona para o arquivo
        const downloadUrl = 'https://storage.googleapis.com/appilder/app/efb2d658839ae545ba85a93a515f2d89/fe0e6b315d91c71dae0244d3163c96fa.apk?GoogleAccessId=desktopapi%40appilder-com.iam.gserviceaccount.com&Expires=1726620991&Signature=JC4ci4KPfUtLRoBM0csdS0aYjmG8iaDhTwoZ%2FZd%2FyWjDjzsUvqLAChuTcwtYuJaarM6AMQXqKshl7%2FW49EB0BXoMgQL9Ce5oZHuiV1JE4z%2BaY7KCdjxQFqokiPcgGks34SzfIwC9d4BPRKoFzC0phGLKlom289kt0144g5QijFjzlEEi7yAGc5YFYp1kBLJ4ak6BP7I9psE5g87I9jtvEnlzqHp4rDE%2BjqepazJcGKTvFyU8UuFtQ%2BXOxfwnvajmkqe8LksPaZbcxQDDL1olTuZ2F%2BrI1MCIrwQCTNjUIDlGJv6XvdiewnEroQhPF1irrGhZj%2B0bwVSUmmUj3%2BpOsQ%3D%3D'; // URL do arquivo APK

        // Cria um elemento de link temporário para iniciar o download
        const tempLink = document.createElement('a');
        tempLink.href = downloadUrl;
        tempLink.download = 'AmetystaApp.apk'; // Nome sugerido para o arquivo baixado
        document.body.appendChild(tempLink);
        tempLink.click();
        document.body.removeChild(tempLink);
    });
});

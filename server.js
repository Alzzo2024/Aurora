const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/downloads', (req, res) => {
    fs.readFile('downloads.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erro ao ler o arquivo');
        } else {
            res.json(JSON.parse(data));
        }
    });
});

app.post('/downloads', (req, res) => {
    const { count } = req.body;
    fs.writeFile('downloads.json', JSON.stringify({ count }), (err) => {
        if (err) {
            res.status(500).send('Erro ao escrever no arquivo');
        } else {
            res.status(200).send('Contagem atualizada');
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

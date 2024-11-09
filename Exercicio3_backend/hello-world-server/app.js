// Importando os módulos http e fs
const http = require('http');
const fs = require('fs');
const path = require('path');

// Criando o servidor
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('Continue!');
    } else if (req.url === '/etefmc') {
        res.writeHead(201, { 'Content-Type': 'text/plain' });
        res.end('Created!');
    } else if (req.url === '/estagio') {
        res.writeHead(302, { 'Content-Type': 'text/plain' });
        res.end('Found!');
    } else if (req.url === '/procure') {
        // Servindo a página 404 personalizada
        fs.readFile(path.join(__dirname, 'app.html'), (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Erro no servidor!');
            } else {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro no servidor!');
    }
});

// Especificando a porta
const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});

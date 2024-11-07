// Importando o módulo http
const http = require('http');

// Criando o servidor
const server = http.createServer((req, res) => {

    if (req.url === '/') 
        {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Continue!');
        } 
    else if (req.url === '/etefmc')
        {
            res.writeHead(201, { 'Content-Type': 'text/plain' });
            res.end('Created!');
        }
    else if (req.url === '/estagio')
        {
                res.writeHead(302, { 'Content-Type': 'text/plain' });
                res.end('Found!');
        }
    else if (req.url === '/procure')
        {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found!');
        }
    else{
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Erro no servidor!');
        }    
}
);

// Especificando a porta
const port = 3000;
server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});


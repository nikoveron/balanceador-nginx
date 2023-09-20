const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola desde web2!');
});

const PORT = process.env.PORT || 80;

server.listen(PORT, () => {
  console.log(`Servidor web2 escuchando en el puerto ${PORT}`);
});

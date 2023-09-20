const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('¡Hola desde web1!');
});

const PORT = process.env.PORT || 80;

server.listen(PORT, () => {
  console.log(`Servidor web1 escuchando en el puerto ${PORT}`);
});

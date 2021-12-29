const exprees = require('express');

const PORT = 3000;

const HOST = '0.0.0.0'; // forma do docker entender que tem que repassar a porta 3000 para minha maqiuina
// e nao ficar rodando o servidor para acesso interno

const app = exprees();

app.get('/', (req, res) => {
  res.send('Hello WOrld!');
});

app.listen(PORT, HOST);

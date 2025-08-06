//o path puxa o arquivo bruto do seu node, e quando estiver puxando eloe não vai confundir com o seu SO

const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded ({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/calcular', (req, res) => {

  const nome = req.body.nome;
  const altura = parseFloat(req.body.altura);
  const peso = parseFloat(req.body.peso);

 const imc = peso / (altura * altura);
 let classificacao = "";

  if (imc > 16) {
    classificacao = 'Abaixo do peso(Grau I)';
  }

 else if (imc > 16 && imc < 16.99) {
    classificacao = 'Abaixo do peso(Grau II)';
  }

 else if (imc > 17 && imc < 18.49) {
    classificacao = 'Abaixo do peso(Grau III)';
  } 

 else if (imc > 18.50 && imc < 24.99) {
    classificacao = '(Peso adequado)';
  }

   else if (imc > 25 && imc < 29.99) {
    classificacao = '(Sobrepeso)';
  }
     else if (imc > 30 && imc < 34.99) {
    classificacao = 'Obesidade(Grau I)';
  }
       else if (imc < 35 && imc < 39.99) {
    classificacao = 'Obesidade(Grau II)';
  }
         else if (imc > 40) {
    classificacao = 'Obesidade(Grau III)';
  }

res.send(`<h2> Seu IMC é: ${imc.toFixed(2)} - Classificação: ${classificacao}</h2>`);

});

app.listen(3012, () => {
  console.log('Servidor rodando em http://localhost:3012');
});





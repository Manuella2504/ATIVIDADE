# Calculadora de IMC

Uma aplicação web simples para calcular o Índice de Massa Corporal (IMC) utilizando Node.js e Express.

## 📋 Sobre o Projeto

Esta aplicação permite que o usuário insira seu nome, altura e peso através de um formulário HTML, e retorna o cálculo do IMC junto com a classificação correspondente segundo os padrões médicos.

## 🚀 Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **HTML5** - Estrutura da página web
- **CSS3** - Estilização (arquivo style.css não incluído)

## 📁 Estrutura do Projeto

```
projeto-imc/
├── app.js          # Servidor Express principal
├── index.html      # Formulário para entrada de dados
└── style.css       # Arquivo de estilos (não incluído)
```

## 🔧 Instalação e Execução

### Pré-requisitos
- Node.js instalado na máquina

### Passos para executar:

1. **Clone ou baixe o projeto**
   ```bash
   git clone <url-do-repositorio>
   cd calculadora-imc
   ```

2. **Instale as dependências**
   ```bash
   npm init -y
   npm install express
   ```

3. **Execute o servidor**
   ```bash
   node app.js
   ```

4. **Acesse a aplicação**
   Abra seu navegador e acesse: `http://localhost:3012`

## 💡 Como Usar

1. Acesse a página inicial
2. Preencha os campos:
   - **Nome**: Seu nome completo
   - **Altura**: Sua altura em metros (ex: 1.75)
   - **Peso**: Seu peso em quilogramas (ex: 70)
3. Clique em "Calcular o IMC"
4. O resultado será exibido com seu IMC e a classificação

## 📊 Classificações do IMC

A aplicação utiliza as seguintes faixas de classificação:

| IMC | Classificação |
|-----|---------------|
| Menor que 16 | Abaixo do peso (Grau I) |
| 16 - 16.99 | Abaixo do peso (Grau II) |
| 17 - 18.49 | Abaixo do peso (Grau III) |
| 18.50 - 24.99 | Peso adequado |
| 25 - 29.99 | Sobrepeso |
| 30 - 34.99 | Obesidade (Grau I) |
| 35 - 39.99 | Obesidade (Grau II) |
| Maior que 40 | Obesidade (Grau III) |

## 🔍 Funcionalidades

- ✅ Interface web simples e intuitiva
- ✅ Cálculo automático do IMC
- ✅ Classificação automática baseada no resultado
- ✅ Validação de campos obrigatórios
- ✅ Resultado formatado com 2 casas decimais

## 📝 Código Principal

### Servidor (app.js)
- Configura servidor Express na porta 3012
- Processa formulário POST em `/calcular`
- Realiza cálculo: `IMC = peso / (altura²)`
- Retorna resultado formatado em HTML

### Interface (index.html)
- Formulário com campos para nome, altura e peso
- Método POST para envio dos dados
- Campos obrigatórios para validação

## 🛠️ Possíveis Melhorias

- [ ] Adicionar validações mais robustas
- [ ] Implementar histórico de cálculos
- [ ] Melhorar o design visual
- [ ] Adicionar gráficos de IMC
- [ ] Implementar responsividade mobile
- [ ] Corrigir lógica das condições do IMC (há alguns erros nas comparações)

## ⚠️ Observações

Há alguns problemas na lógica das condições do IMC no código atual que podem ser corrigidos para melhor precisão dos resultados.

## 📄 Licença

Este projeto é de uso livre para fins educacionais e pessoais.

// Imports
const express = require('express')
const cors = require('cors')

// App
const app = express();

// Rotas
// GETs
app.get('/', (req, res) => {
  console.log('Hello World!')
})

// Inicialização
app.listen(3001, () => {
  console.log('Rodando Servidor')
})

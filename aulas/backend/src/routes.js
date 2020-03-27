const express = require('express')

const routes = express.Router()

routes.get('/', (request, response) => { 
    return response.json({
        "evento": "semana OmniStack 11",
        "aluno": "Lucas Pires Simão "
    })
} )

module.exports = routes
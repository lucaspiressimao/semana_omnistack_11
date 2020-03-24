const express = require("express")

const app = express()

app.get('/', (request, response) => { 
    return response.json({
        "evento": "semana OmniStack 11",
        "aluno": "Lucas Pires Simão "
    })
} )

app.listen(3333)
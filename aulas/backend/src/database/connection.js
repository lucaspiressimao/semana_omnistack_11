const knex = require('knex')
const configuration = require('../../knexfile')

const conneection = knex(configuration.development)

module.exports = conneection
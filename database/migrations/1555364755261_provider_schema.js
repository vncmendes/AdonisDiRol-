'use strict'

const Schema = use('Schema')

class ProviderSchema extends Schema {
  up () {
    this.create('providers', table => {
      table.increments()
      table.string('name', 80).notNullable()
      table
        .string('email', 254)
        .notNullable()
        .unique()
      table.string('password', 60).notNullable()
      table.string('token')
      table.timestamp('token_created_at')
      table.string('cpf').notNullable() // por como string
      table.string('cnpj').notNullable() // string
      table.timestamps()
    })
  }

  down () {
    this.drop('providers')
  }
}

module.exports = ProviderSchema

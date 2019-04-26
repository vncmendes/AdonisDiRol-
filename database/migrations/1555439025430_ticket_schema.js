'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TicketSchema extends Schema {
  up () {
    this.create('tickets', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('event_id').unsigned().references('id').inTable('events')
      table.integer('price').unsigned().notNullable().default(0)
      table.integer('amount').unsigned().notNullable().default(0)
      table.timestamps()
    })
  }

  down () {
    this.drop('tickets')
  }
}

module.exports = TicketSchema

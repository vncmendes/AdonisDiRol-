'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EventStructSchema extends Schema {
  up () {
    this.create('event_structs', table => {
      table
        .integer('struct_id')
        .unsigned()
        .references('id')
        .inTable('structures')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('event_id')
        .unsigned()
        .references('id')
        .inTable('events')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('event_structs')
  }
}

module.exports = EventStructSchema

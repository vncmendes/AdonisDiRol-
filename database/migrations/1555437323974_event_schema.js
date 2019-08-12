'use strict'

const Schema = use('Schema')

class EventSchema extends Schema {
  up () {
    this.create('events', table => {
      table.increments()
      table
        .integer('city_id')
        .unsigned()
        .references('id')
        .inTable('cities')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('provider_id')
        .unsigned()
        .references('id')
        .inTable('providers')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('name').notNullable()
      table.text('description').notNullable()
      table.date('date').notNullable()
      table.boolean('parking').notNullable()
      table.string('location').notNullable()
      table.boolean('gv').notNullable()
      table.time('start', { precision: 4 }).notNullable()
      table.time('end', { precision: 4 }).notNullable()
      table.integer('ticket', 6)
      table.timestamps()
    })
  }

  down () {
    this.drop('events')
  }
}

module.exports = EventSchema

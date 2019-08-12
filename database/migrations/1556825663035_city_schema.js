'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CitySchema extends Schema {
  up () {
    this.create('cities', table => {
      table.increments()
      table
        .integer('state_id')
        .unsigned()
        .references('id')
        .inTable('states')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.string('name')
      table.timestamps()
    })
  }

  down () {
    this.drop('cities')
  }
}

module.exports = CitySchema

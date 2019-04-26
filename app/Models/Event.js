'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Event extends Model {
  provider () {
    return this.belongsTo('App/Models/Provider')
  }
  tickets () {
    return this.hasMany('App/Models/Ticket')
  }
}

module.exports = Event

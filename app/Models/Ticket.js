'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Ticket extends Model {
  user () {
    return this.belongsTo('App/Models/User')
  }
  event () {
    return this.belongsTo('App/Models/Event')
  }
}

module.exports = Ticket

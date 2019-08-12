'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Structure extends Model {
  events () {
    return this.belongsToMany('App/Models/Event')
  }
}

module.exports = Structure

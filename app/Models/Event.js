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
  city () {
    return this.belongsTo('App/Models/City')
  }
  category () {
    return this.belongsToMany('App/Models/Category')
      .pivotTable('event_categs')
      .foreignKey('event_id')
      .relatedForeignKey('cat_id')
      .withTimestamps()
  }
  structure () {
    return this.belongsToMany('App/Models/Structure')
      .pivotTable('event_structs')
      .foreignKey('event_id')
      .relatedForeignKey('struct_id')
      .withTimestamps()
  }
}

module.exports = Event

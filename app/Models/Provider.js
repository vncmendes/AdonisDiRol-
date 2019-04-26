'use strict'

const Model = use('Model')

const Hash = use('Hash')

class Provider extends Model {
  static boot () {
    super.boot()

    this.addHook('beforeSave', async providerInstance => {
      if (providerInstance.dirty.password) {
        providerInstance.password = await Hash.make(providerInstance.password)
      }
    })
    this.addHook('beforeSave', async providerInstance => {
      if (providerInstance.dirty.cpf) {
        providerInstance.cpf = await Hash.make(providerInstance.cpf)
      }
    })
    this.addHook('beforeSave', async providerInstance => {
      if (providerInstance.dirty.cnpj) {
        providerInstance.cnpj = await Hash.make(providerInstance.cnpj)
      }
    })
  }
  events () {
    return this.hasMany('App/Models/Event')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }
}

module.exports = Provider

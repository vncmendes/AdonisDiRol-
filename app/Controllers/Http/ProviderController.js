'use strict'

const Provider = use('App/Models/Provider')

class ProviderController {
  async index ({ request }) {
    const providers = await Provider.all()

    return providers
  }
  async show ({ request }) {
    const { id } = request.params
    const provider = await Provider.find(id)

    return provider
  }
  async store ({ request }) {
    const data = request.only(['name', 'email', 'password', 'cpf', 'cnpj'])

    const provider = await Provider.create(data)

    return provider
  }
  async destroy ({ request }) {
    const { id } = request.params
    const provider = await Provider.find(id)

    await provider.delete(provider)
  }
  async update ({ params, request }) {
    const provider = await Provider.findOrFail(params.id)
    const data = await request.all()
    provider.merge(data)
    await provider.save()

    return provider
  }
}

module.exports = ProviderController

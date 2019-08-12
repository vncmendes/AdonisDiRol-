'use strict'

// const provider = use('App/Models/Provider')

class PSessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()
    const token = await auth.authenticator('provider').attempt(email, password)

    return token
  }
}

module.exports = PSessionController

'use strict'

class PSessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.only(['email', 'password'])
    console.log(auth)

    const token = await auth.authenticator('provider').attempt(email, password)
    return token
  }
}

module.exports = PSessionController

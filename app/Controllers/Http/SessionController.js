'use strict'

class SessionController {
  async store ({ request, response, auth }) {
    const { email, password } = request.all()
    console.log(auth)
    const token = await auth.authenticator('jwt').attempt(email, password)

    return token
  }
}

module.exports = SessionController

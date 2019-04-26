'use strict'

const moment = require('moment')
const crypto = require('crypto')
const Provider = use('App/Models/Provider')
// const Mail = use('Mail')

class ProviderForgotPasswordController {
  async store ({ request, response }) {
    try {
      const email = request.input('email')

      const provider = await Provider.findByOrFail('email', email)

      provider.token = crypto.randomBytes(10).toString('hex')
      provider.token_created_at = new Date()

      await provider.save()
      // await Mail.send(
      //   ['emails.forgot_pw', 'emails.forgot_pw-text'],
      //   {
      //     email,
      //     token: provider.token,
      //     link: `${request.input('redirect_url')}?token=${provider.token}`
      //   },
      //   message => {
      //     message
      //       .to(provider.email)
      //       .from('vncmendes@gmail.com')
      //       .subject('Recuperação de senha')
      //   }
      // )
    } catch (error) {
      return response
        .status(error.status)
        .send({ error: { message: 'Erro, o e-mail existe?' } })
    }
  }
  async update ({ request, response }) {
    try {
      const { token, password } = request.all()

      const provider = await Provider.findByOrFail('token', token)
      const tokenExpired = moment()
        .subtract('2', 'days')
        .isAfter(provider.token_created_at)

      if (tokenExpired) {
        return response.status(401).send({
          error: {
            message:
              'Seu token expirou, faça uma nova requisição de troca de senha'
          }
        })
      }

      provider.token = null
      provider.token_created_at = null
      provider.password = password

      await provider.save()
    } catch (error) {
      return response.status(error.status).send({
        error: { message: 'Algo deu errado, sua senha não foi resetada' }
      })
    }
  }
}

module.exports = ProviderForgotPasswordController

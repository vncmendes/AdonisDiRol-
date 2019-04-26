'use strict'

const Event = use('App/Models/Event')

class EventController {
  async index ({ request, response, view }) {
    const events = await Event.all()

    return events
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    console.log(data)
    const event = await Event.create({ ...data, provider_id: auth.user.id })

    return event
  }

  async show ({ params, request, response, view }) {}

  async edit ({ params, request, response, view }) {}

  async update ({ params, request, response }) {}

  async destroy ({ params, request, response }) {}
}

module.exports = EventController

// /**
//    * Update event details.
//    * PUT or PATCH events/:id
//    *
//    * @param {object} ctx
//    * @param {Request} ctx.request
//    * @param {Response} ctx.response
//    */

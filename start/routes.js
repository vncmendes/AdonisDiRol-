'use strict'

const Route = use('Route')
// Provider
Route.get('providers', 'ProviderController.index')
Route.get('providers/:id', 'ProviderController.show')
Route.post('providers', 'ProviderController.store')
Route.put('providers/:id', 'UserController.update')
Route.delete('providers/:id', 'ProviderController.destroy')

// User
Route.get('users', 'UserController.index')
Route.get('users/:id', 'UserController.show')
Route.post('users', 'UserController.store')
Route.put('users/:id', 'UserController.update')
Route.delete('users/:id', 'UserController.destroy')

// Sessions
Route.post('sessions', 'SessionController.store')
Route.post('provsessions', 'PSessionController.store')
// Fg pw
Route.post('forgotpw', 'ForgotPasswordController.store')
Route.put('forgotpw', 'ForgotPasswordController.update')

Route.get('/files/:id', 'FileController.show')

Route.group(() => {
  Route.post('/files', 'FileController.store')
  Route.resource('events', 'EventController').apiOnly()
}).middleware(['auth'])

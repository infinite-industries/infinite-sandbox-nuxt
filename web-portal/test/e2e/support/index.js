// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// It would be nice to start the server here,
// but it causes Cypress to error out

// import { resolve } from 'path'
// import { Builder, Nuxt } from 'nuxt'
// import config from '../../../nuxt.config.js'

// let app = null

// /* global before */
// before(function () {
//   cy.log('starting server')
//   Object.assign(config, {
//     rootDir: resolve(__dirname, '../../..'),
//     dev: false,
//     mode: 'universal'
//   })

//   app = new Nuxt(config) // TODO: this crashes Cypress
//   return (new Builder(app)).build().then(function () {
//     app.listen(7779, 'localhost')
//   })
// })

// /* global after */
// after(function () {
//   app.close()
// })

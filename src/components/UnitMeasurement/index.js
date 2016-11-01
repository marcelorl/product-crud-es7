import Router from 'koa-router'
import controller from './Controller'

let api = new Router()
api
  .get('/unit-measurement', controller.all)

export default api

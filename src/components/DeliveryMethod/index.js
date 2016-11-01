import Router from 'koa-router'
import controller from './Controller'

let api = new Router()
api
  .get('/delivery-method', controller.all)

export default api

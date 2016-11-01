import Router from 'koa-router'
import controller from './Controller'

let api = new Router()
api
  .get('/tag', controller.all)
  .post('/tag', controller.create)
  .patch('/tag/:id', controller.patch)

export default api

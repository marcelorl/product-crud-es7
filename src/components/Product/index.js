import Router from 'koa-router'
import controller from './Controller'

let api = new Router()
api
  .get('/product', controller.all)
  .post('/product', controller.create)
  .get('/product/:id', controller.find)
  .patch('/product/:id', controller.patch)
  .delete('/product/:id', controller.remove)

export default api

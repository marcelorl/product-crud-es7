import Router from 'koa-router'
import controller from './Controller'

let api = new Router()
api
  .post('/search/un-authenticated/search-messages', controller.search)

export default api

import Koa from 'koa'
import logger from 'koa-logger'
import compress from 'koa-compress'
import cors from 'kcors'
import error from 'koa-json-error'
import json from 'koa-json'
import bodyparser from 'koa-bodyparser'
import parser from 'koa-body'
import helmet from 'koa-helmet'

import componentsApi from './components'

import {connectDatabase} from './config'

connectDatabase()

let app = new Koa()
app
  .use(logger())
  .use(parser({multipart: true}))
  .use(json())
  .use(helmet())
  .use(cors())
  .use(error())
  .use(compress({
    filter: function (contentType) {
      return /text/i.test(contentType)
    },
    threshold: 2048,
    flush: require('zlib').Z_SYNC_FLUSH
  }))
  .use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      ctx.status = err.status || 500
      ctx.body = {message: err.message}
      ctx.app.emit('error', err, this)
    }
  })

app.use(componentsApi.routes())

console.log('PORTTTTTT', process.env.HTTP_PORT)
app.listen(process.env.HTTP_PORT)

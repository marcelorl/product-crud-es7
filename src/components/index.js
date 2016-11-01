import Router from 'koa-router'

import DeliveryMethod from './DeliveryMethod'
import Product from './Product'
import Tag from './Tag'
import UnitMeasurement from './UnitMeasurement'

let api = new Router({
  prefix: '/v1'
})

api
  .use(DeliveryMethod.routes(), DeliveryMethod.allowedMethods())
  .use(Product.routes(), Product.allowedMethods())
  .use(Tag.routes(), Tag.allowedMethods())
  .use(UnitMeasurement.routes(), UnitMeasurement.allowedMethods())

export default api

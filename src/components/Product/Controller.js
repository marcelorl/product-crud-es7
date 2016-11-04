import Model from './Model'
import request from 'request'

// async function all (ctx) {
  /** let page = this.query.page || 1
  * let limit = 10
  * let skip = (page-1)*limit
  * this.body = yield UserModel.find().skip(skip).limit(limit)
  * */

  /* ctx.body = await Model.find()
    .populate('tags', 'name')
    .populate('delivery_method', 'name')
    .populate('unit_measurement', 'name')

  return ctx.body */
// }

async function create (ctx) {
  let requestBody = ctx.request.body
  let nProduct = new Model(requestBody)

  try {
    await nProduct.save()
  } catch (err) {
    throw new Error(err)
  }
}

async function find (ctx) {
  ctx.body = await Model.findOne({_id: ctx.params.id})
    .populate('tags', 'name')
    .populate('delivery_method', 'name')
    .populate('unit_measurement', 'name')

  return ctx.body
}

async function patch (ctx) {
  let requestBody = ctx.request.body

  ctx.body = await Model.findOneAndUpdate({_id: ctx.params.id, store_id: requestBody.store_id}, requestBody, {new: true})
  return ctx.body
}

async function remove (ctx) {
  let requestBody = ctx.request.body

  ctx.body = await Model.remove({_id: ctx.params.id, store_id: requestBody.store_id}, err => {})

  return ctx.body
}

function fetchProducts () {
  return new Promise(function(resolve, reject) {
    request('http://localhost:3000/api/products', function(error, response, body) {
      if (error) return reject(error)
      resolve(body)
    })
  })
}

async function all (ctx) {
  try {
    return ctx.body = await fetchProducts()
  } catch(err) {
    throw new Error(err)
  }
}

export default {
  all,
  create,
  find,
  patch,
  remove
}

import Model from './Model'

async function all (ctx) {
  ctx.body = await Model.find()
  return ctx.body
}

export default {
  all
}

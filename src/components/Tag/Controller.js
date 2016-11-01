import Model from './Model'

async function all (ctx) {
  ctx.body = await Model.find()
  return ctx.body
}

async function create (ctx) {
  let requestBody = ctx.request.body

  let nTag = new Model(requestBody)

  try {
    await nTag.save()
  } catch (err) {
    throw new Error(err)
  }

  ctx.body = `Tag ${nTag.name} saved.`
  return ctx.body
}

async function patch (ctx) {
  let requestBody = ctx.request.body

  ctx.body = await Model.findOneAndUpdate({_id: this.params.id}, requestBody)
  return ctx.body
}

export default {
  all,
  create,
  patch
}

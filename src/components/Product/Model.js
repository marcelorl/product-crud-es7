import mongoose from 'mongoose'
import validate from 'mongoose-validator'
import softDelete from 'mongoose-delete'
import timeStamps from 'mongoose-timestamp'

let priceValidator = [
  validate({
    validator: 'isFloat',
    message: 'Price must be a float value.',
    httpStatus: 422
  })
]

const ProductSchema = new mongoose.Schema({
  name: {type: String, required: true},
  description: {type: String, required: true},
  price: {type: Number, required: true, validate: priceValidator},
  store_id: {type: Number, required: true},
  images_id: {type: Array},
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tag',
    unique: true
  }],
  unit_measurement: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'unit_measurement',
    unique: true
  }],
  delivery_method: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'delivery_method',
    unique: true
  }]
})

ProductSchema.plugin(softDelete, {overrideMethods: true})
ProductSchema.plugin(timeStamps)

export default mongoose.model('product', ProductSchema)

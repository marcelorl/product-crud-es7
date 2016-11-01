import mongoose from 'mongoose'

const DeliveryMethodSchema = new mongoose.Schema({
  name: {type: String, required: true}
})

export default mongoose.model('delivery_method', DeliveryMethodSchema)

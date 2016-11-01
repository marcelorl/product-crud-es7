import mongoose from 'mongoose'

const UnitMeasurementSchema = new mongoose.Schema({
  name: {type: String, required: true}
})

export default mongoose.model('unit_measurement', UnitMeasurementSchema)

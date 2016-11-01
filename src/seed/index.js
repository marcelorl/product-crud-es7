import seeder from 'mongoose-seed'
import dotenv from 'dotenv-safe'
import seed from './seed.json'

dotenv.load()

let data = seed

seeder.connect(`mongodb://${process.env.MONGO_URL}`, () => {
  seeder.loadModels([
    'src/Components/DeliveryMethod/Model.js',
    'src/Components/UnitMeasurement/Model.js'
  ])

  seeder.clearModels(['delivery_method', 'unit_measurement'], () => {
    seeder.populateModels(data)
  })
})

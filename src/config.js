import dotenv from 'dotenv-safe'
import mongoose from 'mongoose'

dotenv.load()

export function connectDatabase () {
  mongoose.Promise = global.Promise

  const uri = `mongodb://${process.env.MONGO_URL}`

  return new Promise((resolve, reject) => {
    mongoose.connection
      .on('error', error => reject(error))
      .on('close', () => console.log('Database connection closed.'))
      .once('open', () => resolve(mongoose.connections[0]))

    mongoose.connect(uri)
  })
}

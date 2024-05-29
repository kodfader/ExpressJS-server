const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://localhost/New-testdb', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('MongoDB connected')
  } catch (err) {
    console.error('MongoDB connection error:', err)

    // This ends the process with some failure and will force
    // the process to exit as quickly as possible even if there are
    // some asynchronous operations pending that not completed fully
    process.exit(1);
  }
}

module.exports = connectDB

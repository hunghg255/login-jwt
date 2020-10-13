const mongoose = require('mongoose');

async function connect() {
  try {
    await mongoose.connect('mongodb://localhost:27017/todoapp', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    console.log('Connect successfully !')
  } catch (error) {
    console.log('Connect failly !')
  }
}

module.exports = { connect }

const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
      // THIS IS HOW YOU FIX A DeprecationWarning, LOOK IN THE TERMINAL FOR THE ERROR
      useUnifiedTopology: true,
      useNewUrlParser: true
    });

		console.log('MongoDB Connected...');
	} catch (err) {
    console.error(err.message)
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;

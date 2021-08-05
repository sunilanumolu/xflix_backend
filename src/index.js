const mongoose = require('mongoose');
const app = require('./app');
const config = require('./config/config');

// Create a MongoDB connection using Mongoose
// mongoose.set('useUnifiedTopology', true);
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log("Connected to MongoDB");
});


// Start the Node server
app.listen(config.port, () => {
  console.log(`App is running on port ${config.port}`);
});

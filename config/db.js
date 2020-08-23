const mongoose = require("mongoose");

const connectMongoDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  });

  console.log(`Connected to MongoDB: ${conn.connection.host}`);
};

module.exports = connectMongoDB;

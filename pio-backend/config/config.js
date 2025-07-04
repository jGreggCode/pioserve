require("dotenv").config();

const config = Object.freeze({
  port: process.env.PORT || 3000,
  databaseURI: process.env.MONGODB_URI || "mongodb://localhost:27017/pioserve",
  nodeEnv: process.env.NODE_ENV || "development",
  accessTokenSecret: process.env.JWT_SECRET,
  clientUrl: process.env.CLIENT_URL || "http://localhost:5173",
});

module.exports = config;

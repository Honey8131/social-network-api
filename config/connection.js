const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost:27017/social-network",
    {
        userNewUrlParser: true,
        userUnifiedTopology: true,
    }
);

mongoose.set("debug", true);

module.exports = mongoose.connection;